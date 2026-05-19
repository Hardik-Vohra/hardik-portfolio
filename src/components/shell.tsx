import { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Shell({ children, id, className }: ShellProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
