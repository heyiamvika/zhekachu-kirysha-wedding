import { FormData, Guest } from '@/app/lib/definitions';

export type Store = {
  guest: Guest;
  currentStep: number;
  formData: FormData;
};

export type Action = {
  onNextStep: () => void;
  onPrevStep: () => void;
  onFormFieldSet: (key: keyof FormData, value: string) => void;
};

export type AppStore = Store & Action;
