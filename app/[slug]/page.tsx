import { guests } from '../lib/placeholder-data';
import GuestPage from '../ui/pages/GuestPage';
import NotFoundPage from '../ui/pages/NotFoundPage';

export async function generateStaticParams() {
  // TODO: Change to data from Google Sheets
  const guestsPages = guests;

  console.log({ guestsPages });

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

  const guest = guests.find((guest) => guest.slug === slug);

  console.log({ slug, guest });

  return guest ? <GuestPage guestName={guest.name} /> : <NotFoundPage />;
}
