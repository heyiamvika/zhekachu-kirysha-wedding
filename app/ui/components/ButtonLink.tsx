import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type ButtonLinkProps = {
  href: string;
} & PropsWithChildren;

export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        `min-w-50 max-w-fit h-10 px-4 flex justify-center items-center border rounded-2xl text-button active:border-white active:bg-foreground active:text-white`
      )}
    >
      {children}
    </Link>
  );
};
