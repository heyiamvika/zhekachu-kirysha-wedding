'use server';

import path from 'path';
import { google, sheets_v4 } from 'googleapis';
import { Guest } from '@/app/lib/definitions';
import { AppStore } from './stores';

const authAndGetSheets = (): sheets_v4.Sheets => {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'credentials.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  return sheets;
};

export const fetchGuests = async (): Promise<Guest[]> => {
  try {
    const sheets = authAndGetSheets();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A2:G',
    });
    const rows = res.data.values;

    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return [];
    }

    const data = rows.map((row, index) => {
      const [name, slug] = row;
      // 1 - row from top (we're skipping the top row and starting from A2)
      // 1 - because index starts from 0, and not from 1
      const rowNumber = index + 2;
      return { name, slug, rowNumber };
    });

    return data.filter(({ slug }) => slug);
  } catch (err) {
    console.error('Error appending data:', err);
    return [];
  }
};

export const submitGuestAnswers = async ({ guest, formData }: AppStore) => {
  try {
    const sheets = authAndGetSheets();
    const { rowNumber } = guest;
    const { transportation, hotel, alcohol, allergies } = formData;

    const range = `Sheet1!D${rowNumber}:G${rowNumber}`;
    const rowValue = [transportation, hotel, alcohol, allergies];

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowValue],
      },
    });
  } catch (err) {
    console.error('Error appending data:', err);
  }
};
