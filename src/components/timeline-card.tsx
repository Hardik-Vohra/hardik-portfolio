import Image from "next/image";

type TimelineCardProps = {
  title: string;
  organization: string;
  logo?: string;
  logoVariant?: "mark" | "wordmark" | "brand-row";
  logoText?: string;
  location?: string;
  period: string;
  summary: string;
  bullets: string[];
};

export function TimelineCard({
  title,
  organization,
  logo,
  logoVariant = "wordmark",
  logoText,
  location,
  period,
  summary,
  bullets
}: TimelineCardProps) {
  const isMarkLogo = logoVariant === "mark";
  const isBrandRow = logoVariant === "brand-row";

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/70 p-6 shadow-glow">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:grid sm:grid-cols-[minmax(0,1fr)_16rem_auto] sm:items-center sm:gap-5">
        <div className="relative z-10 min-w-0 flex-1">
          <p className="font-display text-2xl text-white">{title}</p>
          <p className="mt-1 text-sm text-silver">{organization}</p>
          {location ? <p className="mt-1 text-xs uppercase tracking-[0.25em] text-mist">{location}</p> : null}
        </div>
        {logo ? (
          <div
            className={`relative z-10 overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:justify-self-start sm:-ml-3 ${
              isBrandRow
                ? "flex h-20 w-[16rem] items-center gap-3 px-4 sm:h-20 sm:w-[16rem] sm:px-4"
                : ""
            } ${
              isMarkLogo
                ? "h-20 w-20 p-0 sm:h-24 sm:w-24"
                : isBrandRow
                  ? ""
                  : "h-20 w-[16rem] p-3 sm:h-20 sm:w-[16rem] sm:p-3"
            }`}
          >
            {isBrandRow ? (
              <>
                <div className="relative h-12 w-12 shrink-0 sm:h-12 sm:w-12">
                  <Image
                    src={logo}
                    alt={`${organization} logo`}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <p className="min-w-0 text-[1.05rem] font-black uppercase tracking-[0.04em] text-[#243ea8] sm:text-[1.18rem]">
                  {logoText}
                </p>
              </>
            ) : (
              <Image
                src={logo}
                alt={`${organization} logo`}
                fill
                className={`object-contain ${isMarkLogo ? "p-2 sm:p-2.5" : "p-3"}`}
                sizes={isMarkLogo ? "(min-width: 640px) 128px, 112px" : "(min-width: 640px) 256px, 240px"}
              />
            )}
          </div>
        ) : null}
        <div className="relative z-10 sm:justify-self-end">
          <p className="text-sm font-medium text-accent">{period}</p>
        </div>
      </div>
      <p className="relative z-10 mt-5 text-sm leading-7 text-mist">{summary}</p>
      <ul className="relative z-10 mt-5 space-y-3 text-sm leading-7 text-silver">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
