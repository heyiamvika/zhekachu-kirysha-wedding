import { fetchGuests } from '@/app/lib/googleSheets';
import { NotFoundPage, WrapperPage } from '@/app/ui/pages';
import { AppStoreProvider } from '@/app/lib/stores';

export async function generateStaticParams() {
  const guestsPages = await fetchGuests();
  return guestsPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const guestsPages = await fetchGuests();
  const guest = guestsPages.find((guest) => guest.slug === `/${slug}`);

  return guest ? (
    <AppStoreProvider guest={guest}>
      <WrapperPage />
    </AppStoreProvider>
  ) : (
    <NotFoundPage />
  );
}
