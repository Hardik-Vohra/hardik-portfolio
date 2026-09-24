import { FileBadge2, FileText } from "lucide-react";

import type { Certificate } from "@/types/portfolio";

type CertificateGridProps = {
  items: Certificate[];
};

export function CertificateGrid({ items }: CertificateGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const hasAsset = Boolean(item.asset);

        return (
          <article
            key={item.title}
            className={`rounded-[1.75rem] border p-6 shadow-glow ${
              hasAsset
                ? "border-white/10 bg-panel/70"
                : "border-white/8 bg-panel/50"
            }`}
          >
            <div className="flex items-center gap-3 text-accent">
              {item.kind === "pdf" ? <FileText className="h-5 w-5" /> : <FileBadge2 className="h-5 w-5" />}
              <p className="text-xs uppercase tracking-[0.3em] text-silver">
                {item.kind === "pdf" ? "Document" : "Credential"}
              </p>
            </div>
            <h3 className="mt-5 font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-silver">{item.issuer}</p>
            <p className="mt-4 text-sm leading-7 text-mist">{item.outcome}</p>
            {hasAsset ? (
              <a
                href={item.asset}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-accent hover:text-accent"
              >
                Open certificate
              </a>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
