export type Guest = {
  slug: string;
  name: string;
  rowNumber: number;
};

export type FormData = {
  transportation: string | null;
  hotel: string | null;
  allergies: string | null;
  alcohol: string | null;
  confirmation: string | null;
};

export type Buttons = {
  formFieldKey: keyof FormData;
  options: string[];
};
