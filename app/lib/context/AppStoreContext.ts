'use client';

import { createContext } from 'react';
import { AppStoreApi } from '@/app/lib/stores';

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);
