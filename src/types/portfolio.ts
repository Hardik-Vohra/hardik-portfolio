export type MediaItem = {
  src: string;
  alt: string;
  kind: "image" | "video" | "pdf";
  caption?: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type TimelineItem = {
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

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  impact: string;
  tech: string[];
  tags: string[];
  featured: boolean;
  media: MediaItem[];
  bullets: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  outcome: string;
  asset?: string;
  kind: "image" | "pdf";
};
