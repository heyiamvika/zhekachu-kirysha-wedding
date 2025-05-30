import { fetchGuests } from '@/app/lib/googleSheets';
import { DesktopPage, NotFoundPage, WrapperPage } from '@/app/ui/pages';
import { AppStoreProvider, SlugProvider } from '@/app/lib/providers';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

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
  const userAgentHeaders = await headers();
  const ua = userAgent({ headers: userAgentHeaders });
  const isMobile = ua.device.type === 'mobile';

  const guestsPages = await fetchGuests();
  const guest = guestsPages.find((guest) => guest.slug === `/${slug}`);

  if (!isMobile) {
    return <DesktopPage />;
  }

  if (!guest) {
    return (
      <SlugProvider>
        <NotFoundPage />;
      </SlugProvider>
    );
  }

  return (
    <SlugProvider guest={guest}>
      <AppStoreProvider guest={guest}>
        <WrapperPage />
      </AppStoreProvider>
    </SlugProvider>
  );
}
