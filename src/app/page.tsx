"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  GraduationCap,
  Images,
  Mail,
  Menu,
  Trophy,
  UserRound,
  UsersRound,
  X
} from "lucide-react";
import { useRef, useState } from "react";

import content from "@/data/portfolio-content.json";
import type { Certificate, Metric, Project, TimelineItem } from "@/types/portfolio";
import { CertificateGrid } from "@/components/certificate-grid";
import { ContactPanel } from "@/components/contact-panel";
import { MediaGallery } from "@/components/media-gallery";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { StatCard } from "@/components/stat-card";
import { TimelineCard } from "@/components/timeline-card";

const heroMetrics = content.heroMetrics as Metric[];
const experience = content.experience as TimelineItem[];
const projects = content.projects as Project[];
const certificates = content.certificates as Certificate[];
const featuredProjects = projects.filter((project) => project.featured);

const galleryItems = [
  ["/assets/images/profile-formal.jpeg", "Profile", "Mechanical engineering student, builder, and team lead."],
  ["/assets/images/team-titan-workshop.jpeg", "BAJA SAE India 2025", "Team Daedalus Racing at the BAJA SAE India 2025 competition."],
  ["/assets/images/team-daedalus-event.jpeg", "ASME EFx Robowar", "Captain of the ASME NSUT team competing in Robowar."],
  ["/assets/images/team-group.jpeg", "Robowar Bot Internals", "Internal mechanical and electrical packaging of the combat robot."],
  ["/assets/images/robot-internals.jpeg", "ASME EFx 2026 Team - ASME NSUT", "ASME NSUT team celebration at the ASME EFx 2026 competition."],
  ["/assets/images/gallery-baja-team.png", "BAJA Team", "Team Daedalus Racing group photo."],
  ["/assets/images/gallery-asme-efx-team.png", "ASME EFx", "ASME team collaboration and event participation."],
  ["/assets/images/gallery-team-award-stage.png", "Competition Stage", "A team milestone captured after competition."],
  ["/assets/images/gallery-cad-chassis-frame.png", "Chassis Frame", "CAD development for a vehicle chassis."],
  ["/assets/images/gallery-cad-baja-assembly.png", "BAJA Assembly", "Vehicle assembly and packaging study."],
  ["/assets/images/gallery-cad-engine-crankshaft.png", "Engine Crankshaft", "Powertrain component modeling."],
  ["/assets/images/gallery-cad-ehpv.png", "e-HPV Design", "Electric human-powered vehicle CAD work."],
  ["/assets/images/gallery-iot-sim-road.png", "Autonomous Simulation", "Virtual vehicle and control-system simulation."],
  ["/assets/images/gallery-fea-torsion-chassis.png", "Torsion Analysis", "Structural deformation study of a chassis."],
  ["/assets/images/gallery-fea-suspension-front.png", "Front Suspension FEA", "Simulation-led structural validation."],
  ["/assets/images/gallery-fea-suspension-rear.png", "Rear Suspension FEA", "Deformation analysis for a suspension system."],
  ["/assets/images/gallery-suspension-model.png", "Suspension Model", "Mechanical system modeling and design iteration."],
  ["/assets/images/gallery-thermal-brake-rotor.png", "Thermal Analysis", "Thermal behavior study of a brake rotor."]
].map(([src, title, subtitle]) => ({ src, title, subtitle }));

type SectionKey = "overview" | "experience" | "projects" | "leadership" | "credentials" | "gallery" | "resume" | "contact";

const sectionTabs: Array<{
  key: SectionKey;
  label: string;
  description: string;
  icon: typeof UserRound;
}> = [
  { key: "overview", label: "Overview", description: "Profile and focus", icon: UserRound },
  { key: "experience", label: "Experience", description: "Industrial work", icon: BriefcaseBusiness },
  { key: "projects", label: "Projects", description: "Builds and analysis", icon: FolderKanban },
  { key: "leadership", label: "Leadership", description: "Teams and ownership", icon: UsersRound },
  { key: "credentials", label: "Credentials", description: "Education and awards", icon: GraduationCap },
  { key: "gallery", label: "Gallery", description: "Visual proof of work", icon: Images },
  { key: "resume", label: "Resume", description: "Full one-page profile", icon: FileText },
  { key: "contact", label: "Contact", description: "Start a conversation", icon: Mail }
];

function SectionNav({ activeSection, onSelect }: { activeSection: SectionKey; onSelect: (section: SectionKey) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const selectSection = (section: SectionKey) => {
    onSelect(section);
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="hidden items-center gap-1 lg:flex">
        {sectionTabs.map(({ key, label, icon: Icon }) => (
          <button key={key} type="button" onClick={() => selectSection(key)} className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition ${activeSection === key ? "bg-white text-[#071019]" : "text-mist hover:bg-white/10 hover:text-white"}`}>
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <button type="button" aria-label="Open portfolio sections" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="rounded-full border border-white/10 p-3 text-white lg:hidden">
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {menuOpen ? (
        <div className="absolute right-0 top-14 z-40 w-72 rounded-3xl border border-white/10 bg-[#0c111a]/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
          {sectionTabs.map(({ key, label, description, icon: Icon }) => (
            <button key={key} type="button" onClick={() => selectSection(key)} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${activeSection === key ? "bg-white text-[#071019]" : "text-white hover:bg-white/10"}`}>
              <Icon className="h-4 w-4 shrink-0" />
              <span>
                <span className="block text-sm font-semibold">{label}</span>
                <span className={`block text-xs ${activeSection === key ? "text-[#51606d]" : "text-mist"}`}>{description}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const workspaceRef = useRef<HTMLDivElement>(null);
  const openSection = (section: SectionKey) => {
    setActiveSection(section);
    requestAnimationFrame(() => {
      workspaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-wire opacity-30" />

      <Shell className="relative pb-8 pt-5 lg:pt-8">
        <header className="sticky top-4 z-30 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a0e16]/85 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
          <button type="button" onClick={() => openSection("overview")} className="flex items-center gap-3 text-left">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-black text-[#061018]">HV</span>
            <span>
              <span className="block font-display text-sm font-semibold text-white">{content.site.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.24em] text-mist sm:block">Mechanical Engineering Portfolio</span>
            </span>
          </button>
          <SectionNav activeSection={activeSection} onSelect={openSection} />
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent"><span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(119,224,255,0.9)]" />Mechanical Engineer in the making</div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-[4.8rem] xl:leading-[1.04]">Designing machines that move from analysis to reality.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">{content.site.role}. I work across CAD, CAE, manufacturing optimization, vehicle systems, and technical leadership, with a bias toward practical designs that can be built, tested, and improved.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => openSection("projects")} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05070b] transition hover:bg-accent">Explore projects <ArrowRight className="h-4 w-4" /></button>
              <button type="button" onClick={() => openSection("resume")} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">View resume <FileText className="h-4 w-4" /></button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{heroMetrics.map((metric) => <StatCard key={metric.label} label={metric.label} value={metric.value} />)}</div>
          </div>

          <div className="relative lg:pl-8">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(119,224,255,0.25),transparent_45%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src="/assets/images/profile-formal.jpeg" alt="Hardik Vohra portrait" fill priority className="object-cover" sizes="(min-width: 1024px) 38vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#071019]/70 p-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Currently building</p>
                  <p className="mt-2 font-display text-xl text-white">ASME Team Falcon e-HPV</p>
                  <p className="mt-1 text-sm text-mist">Vehicle architecture, testing, and team execution.</p>
                </div>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-base/50 p-4"><p className="text-xs uppercase tracking-[0.25em] text-mist">Based in</p><p className="mt-2 text-sm text-white">{content.site.location}</p></div>
                <div className="rounded-2xl border border-white/10 bg-base/50 p-4"><p className="text-xs uppercase tracking-[0.25em] text-mist">Education</p><p className="mt-2 text-sm text-white">B.Tech Mechanical, NSUT</p></div>
              </div>
            </div>
          </div>
        </div>
      </Shell>

      <Shell ref={workspaceRef} className="relative scroll-mt-24 pt-4 lg:pt-8">
        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24, ease: "easeOut" }}>
            {activeSection === "overview" ? <div className="space-y-16">
              <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]"><SectionHeading eyebrow="About" title={content.about.headline} description={content.about.body} /><div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">{content.about.focusAreas.map((area, index) => <div key={area} className="rounded-3xl border border-white/10 bg-panel/80 p-5 shadow-glow"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">0{index + 1}</p><p className="mt-3 text-sm leading-7 text-silver">{area}</p></div>)}</div></div>
              <div><SectionHeading eyebrow="Featured work" title="A quick read on the engineering work behind the profile." description="Open Projects for the complete catalogue, filters, tools, and detailed outcomes." /><div className="mt-8"><ProjectShowcase projects={featuredProjects.slice(0, 3)} /></div></div>
            </div> : null}

            {activeSection === "experience" ? <div><SectionHeading eyebrow="Experience" title="Industrial exposure connected to plant-floor realities." description="Internships across project development, infrastructure, and automotive manufacturing built a practical grounding in cost, quality, process efficiency, and engineering communication." /><div className="mt-10 grid gap-6">{experience.map((item) => <TimelineCard key={`${item.organization}-${item.period}`} {...item} />)}</div></div> : null}

            {activeSection === "projects" ? <div><SectionHeading eyebrow="Projects" title="Design, simulation, and execution in one place." description="Filter the project catalogue by engineering domain, then scan the role, measurable impact, tools, and hands-on contribution for each build." /><div className="mt-10"><ProjectShowcase projects={projects} /></div></div> : null}

            {activeSection === "leadership" ? <div><SectionHeading eyebrow="Leadership" title="Taking ownership of people, priorities, and outcomes." description="Leadership here means making technical work move: setting direction, coordinating teams, managing resources, and keeping execution accountable." /><div className="mt-10 grid gap-6 lg:grid-cols-2">{content.leadership.map((item) => <TimelineCard key={`${item.organization}-${item.period}`} title={item.title} organization={item.organization} period={item.period} summary={item.summary} bullets={item.bullets} />)}</div></div> : null}

            {activeSection === "credentials" ? <div className="space-y-16">
              <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]"><SectionHeading eyebrow="Education" title="A strong academic base, kept close to applied work." description="Academic progress is presented alongside the systems, analysis, and team projects where the learning is put to work." /><div className="grid gap-5">{content.education.map((item) => <TimelineCard key={`${item.organization}-${item.period}`} title={item.title} organization={item.organization} period={item.period} summary={item.summary} bullets={item.bullets} />)}</div></div>
              <div><SectionHeading eyebrow="Recognition" title="Results across competitions, academics, and applied problem-solving." description="A concise view of rankings, awards, and distinctions that reinforce the engineering work." /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.achievements.map((achievement) => <article key={achievement} className="rounded-3xl border border-white/10 bg-panel/70 p-6 shadow-glow"><div className="flex items-center gap-3 text-flame"><Trophy className="h-5 w-5" /><p className="text-xs uppercase tracking-[0.3em]">Achievement</p></div><p className="mt-5 text-sm leading-7 text-silver">{achievement}</p></article>)}</div></div>
              <div><SectionHeading eyebrow="Certifications" title="Credentials that add technical breadth." description="Current certifications and learning programs." /><div className="mt-8"><CertificateGrid items={certificates} /></div></div>
            </div> : null}

            {activeSection === "gallery" ? <div><SectionHeading eyebrow="Gallery" title="Visual proof of teams, builds, and analysis." description="A curated visual record of the work behind the projects, from CAD and FEA studies to competition teams and prototypes." /><div className="mt-10"><MediaGallery items={galleryItems} /></div></div> : null}

            {activeSection === "resume" ? <div><SectionHeading eyebrow="Resume" title="My latest profile" description="Updated academic record, projects, and experience." /><div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5"><div><p className="font-display text-xl text-white">Hardik Vohra Resume</p><p className="mt-1 text-sm text-mist">Updated academic record, projects, and experience.</p></div><a href={content.site.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-accent hover:text-accent">Open PDF</a></div><div className="h-[720px] bg-white"><iframe src={content.site.resume} title="Hardik Vohra Resume" className="h-full w-full" /></div></div></div> : null}

            {activeSection === "contact" ? <div><SectionHeading eyebrow="Contact" title="Have a technical problem worth solving?" description="For internships, project collaborations, manufacturing improvement, or engineering conversations, the best way to reach me is by email or LinkedIn." /><div className="mt-10"><ContactPanel personalEmail={content.site.emails.personal} collegeEmail={content.site.emails.college} phone={content.site.phone} location={content.site.location} linkedin={content.site.linkedin} resume={content.site.resume} /></div></div> : null}
          </motion.div>
        </AnimatePresence>
      </Shell>

      <Shell className="relative pb-20 pt-2"><div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>Hardik Vohra / Mechanical Engineering</span><button type="button" onClick={() => openSection("contact")} className="inline-flex items-center gap-2 text-accent transition hover:text-white">Let&apos;s connect <ArrowRight className="h-3.5 w-3.5" /></button></div></Shell>
    </main>
  );
}
