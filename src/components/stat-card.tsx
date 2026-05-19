type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
      <p className="text-xs uppercase tracking-[0.3em] text-mist">{label}</p>
      <p className="mt-3 font-display text-2xl text-white sm:text-3xl">{value}</p>
    </div>
  );
}
