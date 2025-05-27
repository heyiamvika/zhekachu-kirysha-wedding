'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { SlugContext } from '@/app/lib/context';
import { Guest } from '@/app/lib/definitions';

export const SlugProvider = ({
  children,
  guest,
}: { guest?: Guest } & PropsWithChildren) => {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (guest) {
      sessionStorage.setItem('slug', guest.slug);
      setSlug(guest.slug);
    } else {
      const existingSlug = sessionStorage.getItem('slug');
      setSlug(existingSlug);
    }
  }, [guest]);

  return <SlugContext.Provider value={slug}>{children}</SlugContext.Provider>;
};
