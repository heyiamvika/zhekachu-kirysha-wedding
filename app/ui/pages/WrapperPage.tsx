'use client';

import { Guest } from '@/app/lib/definitions';
import { renderStep } from '@/app/ui/helpers';
import { DesktopPage } from '@/app/ui/pages';
import { useWindowWidth } from '@/app/lib/hooks';
import { createAppStore } from '@/app/lib/stores';

const MOBILE_MAX_WIDTH = 430;

export const WrapperPage = ({ guest }: { guest: Guest }) => {
  const windowWidth = useWindowWidth();
  const store = createAppStore(guest)();
  const isDekstop = windowWidth && windowWidth > MOBILE_MAX_WIDTH;

  return isDekstop ? <DesktopPage /> : renderStep(store);
};
