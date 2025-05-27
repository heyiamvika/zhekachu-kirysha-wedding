import { NotFoundPage } from '@/app/ui/pages';
import { SlugProvider } from '@/app/lib/providers';

export default function Home() {
  return (
    <SlugProvider>
      <NotFoundPage />
    </SlugProvider>
  );
}
