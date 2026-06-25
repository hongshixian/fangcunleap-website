import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  id?: string;
}

export function H2({ children, id }: HeadingProps) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 text-3xl font-bold text-[#1F2421] scroll-mt-20"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: HeadingProps) {
  return (
    <h3
      id={id}
      className="mt-8 mb-3 text-2xl font-semibold text-[#1F2421] scroll-mt-20"
    >
      {children}
    </h3>
  );
}
