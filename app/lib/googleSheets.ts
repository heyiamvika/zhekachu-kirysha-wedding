import path from 'path';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { Guest } from './definitions';

const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const readRows = async (auth: GoogleAuth<JSONClient>) => {
  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1LWiT_789Gyugc4MU_3hMHRB2k3AawQjfcALvss1DJfM',
    range: 'Sheet1!A2:G',
  });
  const rows = res.data.values;

  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return [];
  }

  return rows;
};

export const fetchGuests = async (): Promise<Guest[]> => {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  try {
    const data = await readRows(auth);
    const dataWithSlugs = data.map((row) => {
      const [name, slug] = row;
      return { name, slug };
    });

    return dataWithSlugs.filter(({ slug }) => slug);
  } catch (err) {
    console.error('Error appending data:', err);
    return [];
  }
};

export const submitGuestAnswers = async () => {
  // const auth = new google.auth.GoogleAuth({
  //   keyFile: CREDENTIALS_PATH,
  //   scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Or 'https://www.googleapis.com/auth/spreadsheets.readonly' for read-only
  // });

  try {
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: SHEET_ID,
    //   range: 'Sheet1!A:Z', // Adjust this range as needed
    //   valueInputOption: 'RAW',
    //   resource: {
    //     values: [Object.values(formData)], // Assuming formData is an object like { field1: 'value1', field2: 'value2' }
    //   },
    // });
    // console.log('Data appended successfully!');
  } catch (err) {
    console.error('Error appending data:', err);
  }
};
