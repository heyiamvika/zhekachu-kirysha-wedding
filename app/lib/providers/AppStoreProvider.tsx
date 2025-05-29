'use client';

import { PropsWithChildren, useRef } from 'react';
import { AppStoreApi, createAppStore } from '@/app/lib/stores';
import { Guest } from '@/app/lib/definitions';
import { AppStoreContext } from '@/app/lib/context';

export const AppStoreProvider = ({
  children,
  guest,
}: { guest: Guest } & PropsWithChildren) => {
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
