import { useContext } from 'react';
import { AppStore } from '@/app/lib/stores';
import { useStore } from 'zustand';
import { AppStoreContext } from '@/app/lib/context';

export const useAppStore = <T>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore must be used within AppStoreContext`);
  }

  return useStore(appStoreContext, selector);
};
