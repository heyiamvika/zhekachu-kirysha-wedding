'use client';

import { createContext, PropsWithChildren, useContext, useRef } from 'react';
import { AppStore, AppStoreApi, createAppStore } from '@/app/lib/stores';
import { Guest } from '@/app/lib/definitions';
import { useStore } from 'zustand';

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);

export const AppStoreProvider = ({
  children,
  guest,
}: { guest?: Guest } & PropsWithChildren) => {
  const storeRef = useRef<AppStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAppStore(guest);
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore must be used within AppStoreContext`);
  }

  return useStore(appStoreContext, selector);
};
