import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

type ContactPanelProps = {
  personalEmail: string;
  collegeEmail: string;
  phone: string;
  location: string;
  linkedin: string;
  resume: string;
};

export function ContactPanel({
  personalEmail,
  collegeEmail,
  phone,
  location,
  linkedin,
  resume
}: ContactPanelProps) {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(119,224,255,0.12),rgba(255,122,24,0.08))] p-8 shadow-glow lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          Contact
        </p>
        <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">
          Ready for internships, engineering roles, and high-ownership build teams.
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-silver">
          If you are hiring for design, simulation, motorsports, manufacturing, or technical leadership roles, I would love to connect.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            Resume PDF
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-base/50 p-6">
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-mist">Personal Email</p>
            <p className="mt-1 text-sm text-white">{personalEmail}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-mist">College Email</p>
            <p className="mt-1 text-sm text-white">{collegeEmail}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-mist">Phone</p>
            <p className="mt-1 text-sm text-white">{phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-accent" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-mist">Location</p>
            <p className="mt-1 text-sm text-white">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
