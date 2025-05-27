import { useContext } from 'react';
import { SlugContext } from '../context';

export const useSlug = () => {
  const slugContext = useContext(SlugContext);

  if (slugContext === undefined) {
    throw new Error(`useSlug must be used within SlugContext`);
  }

  return slugContext;
};
