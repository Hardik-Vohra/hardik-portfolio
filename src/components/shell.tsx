import { forwardRef, type ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export const Shell = forwardRef<HTMLElement, ShellProps>(function Shell(
  { children, id, className },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24 ${className ?? ""}`}
    >
      {children}
    </section>
  );
});
