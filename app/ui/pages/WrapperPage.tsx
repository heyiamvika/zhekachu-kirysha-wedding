'use client';

import { renderStep } from '@/app/ui/helpers';
import { DesktopPage } from '@/app/ui/pages';
import { useWindowWidth } from '@/app/lib/hooks';
import { useAppStore } from '@/app/lib/stores';

const MOBILE_MAX_WIDTH = 430;

export const WrapperPage = () => {
  const windowWidth = useWindowWidth();
  const { currentStep } = useAppStore((state) => state);
  const isDekstop = windowWidth && windowWidth > MOBILE_MAX_WIDTH;

  return isDekstop ? <DesktopPage /> : renderStep(currentStep);
};
