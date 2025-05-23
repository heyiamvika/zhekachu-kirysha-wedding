import { PAGES } from '@/app/lib/pages';
import { create } from 'zustand';
import { AppStore } from '@/app/lib/stores';
import { FormData, Guest } from '@/app/lib/definitions';

const defaultInitState = {
  currentStep: PAGES.START,
  formData: {
    transportation: null,
    hotel: null,
    allergies: null,
    alcohol: null,
  },
};

export const createAppStore = (guest: Guest) => {
  const initState = { guest, ...defaultInitState };

  return create<AppStore>()((set) => ({
    ...initState,
    onNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    onPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    onFormFieldSet: (key: keyof FormData, value: string) =>
      set((state) => ({ formData: { ...state.formData, [key]: value } })),
  }));
};
