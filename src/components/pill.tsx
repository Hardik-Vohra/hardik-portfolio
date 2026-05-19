type PillProps = {
  children: string;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-silver">
      {children}
    </span>
  );
}
