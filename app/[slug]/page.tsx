import { fetchGuests } from '../lib/googleSheets';
import GuestPage from '../ui/pages/GuestPage';
import NotFoundPage from '../ui/pages/NotFoundPage';

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
  return guest ? <GuestPage guestName={guest.name} /> : <NotFoundPage />;
}
