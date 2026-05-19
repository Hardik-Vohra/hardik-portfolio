import Image from "next/image";
import { ArrowRight, FileText, Trophy } from "lucide-react";

import content from "@/data/portfolio-content.json";
import type { Certificate, Metric, Project, TimelineItem } from "@/types/portfolio";
import { CertificateGrid } from "@/components/certificate-grid";
import { ContactPanel } from "@/components/contact-panel";
import { MediaGallery } from "@/components/media-gallery";
import { Pill } from "@/components/pill";
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
  {
    src: "/assets/images/profile-formal.jpeg",
    title: "Gallery Image 01",
    subtitle: "Photo uploaded and added to gallery. Project mapping pending your confirmation."
  },
  {
    src: "/assets/images/team-titan-workshop.jpeg",
    title: "Gallery Image 02",
    subtitle: "Photo uploaded and added to gallery. Project mapping pending your confirmation."
  },
  {
    src: "/assets/images/team-daedalus-event.jpeg",
    title: "Gallery Image 03",
    subtitle: "Photo uploaded and added to gallery. Project mapping pending your confirmation."
  },
  {
    src: "/assets/images/team-group.jpeg",
    title: "Gallery Image 04",
    subtitle: "Photo uploaded and added to gallery. Project mapping pending your confirmation."
  },
  {
    src: "/assets/images/robot-internals.jpeg",
    title: "Gallery Image 05",
    subtitle: "Photo uploaded and added to gallery. Project mapping pending your confirmation."
  },
  {
    src: "/assets/images/gallery-baja-team.png",
    title: "Gallery Image 06",
    subtitle: "BAJA team group photo added to the general gallery."
  },
  {
    src: "/assets/images/gallery-asme-efx-team.png",
    title: "Gallery Image 07",
    subtitle: "ASME EFx team photo added to the general gallery."
  },
  {
    src: "/assets/images/gallery-team-award-stage.png",
    title: "Gallery Image 08",
    subtitle: "Celebration and stage photo added to the general gallery."
  },
  {
    src: "/assets/images/gallery-cad-chassis-frame.png",
    title: "Gallery Image 09",
    subtitle: "CAD chassis frame render added to the general gallery."
  },
  {
    src: "/assets/images/gallery-cad-baja-assembly.png",
    title: "Gallery Image 10",
    subtitle: "Vehicle assembly CAD render added to the general gallery."
  },
  {
    src: "/assets/images/gallery-cad-engine-crankshaft.png",
    title: "Gallery Image 11",
    subtitle: "Engine crankshaft CAD render added to the general gallery."
  },
  {
    src: "/assets/images/gallery-cad-ehpv.png",
    title: "Gallery Image 12",
    subtitle: "e-HPV CAD render added to the general gallery."
  },
  {
    src: "/assets/images/gallery-iot-sim-road.png",
    title: "Gallery Image 13",
    subtitle: "Autonomous vehicle simulation visual added to the general gallery."
  },
  {
    src: "/assets/images/gallery-fea-torsion-chassis.png",
    title: "Gallery Image 14",
    subtitle: "Torsion deformation analysis visual added to the general gallery."
  },
  {
    src: "/assets/images/gallery-fea-suspension-front.png",
    title: "Gallery Image 15",
    subtitle: "Front suspension deformation study added to the general gallery."
  },
  {
    src: "/assets/images/gallery-fea-suspension-rear.png",
    title: "Gallery Image 16",
    subtitle: "Rear suspension deformation study added to the general gallery."
  },
  {
    src: "/assets/images/gallery-suspension-model.png",
    title: "Gallery Image 17",
    subtitle: "Suspension model visual added to the general gallery."
  },
  {
    src: "/assets/images/gallery-thermal-brake-rotor.png",
    title: "Gallery Image 18",
    subtitle: "Brake rotor thermal analysis visual added to the general gallery."
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-wire opacity-30" />

      <Shell className="relative pb-10 pt-6 lg:pt-10">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-xl text-white">{content.site.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-mist">
              Mechanical Engineering Portfolio
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-silver">
            <a href="#about" className="transition hover:text-accent">
              About
            </a>
            <a href="#projects" className="transition hover:text-accent">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-accent">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-accent">
              Contact
            </a>
          </nav>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Recruiter Focused Portfolio
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
              Designing machines, optimizing systems, and leading technical teams with build-ready precision.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              {content.site.role}. From industrial process improvement at Larsen & Toubro and Maruti Suzuki to motorsports, robotics, and vehicle development at NSUT, this portfolio is built to show engineering depth with leadership range.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05070b] transition hover:bg-accent hover:text-[#05070b]"
              >
                Explore projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={content.site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Open resume
                <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map((metric) => (
                <StatCard key={metric.label} label={metric.label} value={metric.value} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(119,224,255,0.28),transparent_42%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/assets/images/profile-formal.jpeg"
                  alt="Hardik Vohra portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-base/50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-mist">Location</p>
                  <p className="mt-2 text-sm text-white">{content.site.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-base/50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-mist">Current Track</p>
                  <p className="mt-2 text-sm text-white">B.Tech Mechanical, NSUT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>

      <Shell id="about">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title={content.about.headline}
            description={content.about.body}
          />
          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-panel/80 p-7 shadow-glow">
            {content.about.focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-silver"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </Shell>

      <Shell id="skills">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A portfolio built around design rigor, simulation, and execution."
          description="The skills architecture is grouped around how engineering work actually gets done: concept, validation, optimization, and collaboration."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(content.skills).map(([category, list]) => (
            <article
              key={category}
              className="rounded-[1.75rem] border border-white/10 bg-panel/70 p-6 shadow-glow"
            >
              <h3 className="font-display text-2xl text-white">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {(list as string[]).map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Shell>

      <Shell id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Industrial exposure that connects design thinking with plant-floor realities."
          description="Hands-on internships in infrastructure and automotive manufacturing built a strong grounding in process efficiency, quality thinking, and practical engineering communication."
        />
        <div className="mt-10 grid gap-6">
          {experience.map((item) => (
            <TimelineCard key={`${item.organization}-${item.period}`} {...item} />
          ))}
        </div>
      </Shell>

      <Shell id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="Projects that show engineering depth, ownership, and competition-ready execution."
          description="This showcase is structured for recruiters: every project pairs role clarity with impact, tools, and proof of hands-on execution."
        />
        <div className="mt-10">
          <ProjectShowcase projects={featuredProjects} />
        </div>
      </Shell>

      <Shell id="certifications">
        <SectionHeading
          eyebrow="Certifications"
          title="Coursework and credentials that reinforce technical breadth."
          description="The site includes document-ready certificate support and leaves room for adding more images or PDFs without changing the UI."
        />
        <div className="mt-10">
          <CertificateGrid items={certificates} />
        </div>
      </Shell>

      <Shell id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership shown through team velocity, ownership, and trust."
          description="These roles show a pattern recruiters value: taking responsibility, organizing people, and driving outcomes beyond individual contribution."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.leadership.map((item) => (
            <TimelineCard
              key={`${item.organization}-${item.period}`}
              title={item.title}
              organization={item.organization}
              period={item.period}
              summary={item.summary}
              bullets={item.bullets}
            />
          ))}
        </div>
      </Shell>

      <Shell id="achievements">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition across competitions, academics, and applied problem-solving."
          description="A concise recruiter-friendly view of competition wins, rankings, and academic distinctions."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.achievements.map((achievement) => (
            <article
              key={achievement}
              className="rounded-[1.75rem] border border-white/10 bg-panel/70 p-6 shadow-glow"
            >
              <div className="flex items-center gap-3 text-flame">
                <Trophy className="h-5 w-5" />
                <p className="text-xs uppercase tracking-[0.3em]">Achievement</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-silver">{achievement}</p>
            </article>
          ))}
        </div>
      </Shell>

      <Shell id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual gallery for uploaded photos, separate from project assignment."
          description="These images are intentionally kept neutral in the gallery until you confirm which project or experience each one belongs to."
        />
        <div className="mt-10">
          <MediaGallery items={galleryItems} />
        </div>
      </Shell>

      <Shell id="education">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation grounded in engineering and continuous learning."
            description="Education is presented with enough context for recruiters while keeping the emphasis on applied work and leadership."
          />
          <div className="grid gap-5">
            {content.education.map((item) => (
              <TimelineCard
                key={`${item.organization}-${item.period}`}
                title={item.title}
                organization={item.organization}
                period={item.period}
                summary={item.summary}
                bullets={item.bullets}
              />
            ))}
          </div>
        </div>
      </Shell>

      <Shell id="resume">
        <SectionHeading
          eyebrow="Resume"
          title="Resume access is built directly into the experience."
          description="Recruiters can scan the site first and open the full ATS-style resume without leaving the portfolio flow."
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <p className="font-display text-xl text-white">Hardik Vohra Resume</p>
              <p className="mt-1 text-sm text-mist">
                Embedded viewer with direct PDF fallback.
              </p>
            </div>
            <a
              href={content.site.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-accent hover:text-accent"
            >
              Open PDF
            </a>
          </div>
          <div className="h-[720px] bg-white">
            <iframe
              src={content.site.resume}
              title="Hardik Vohra Resume"
              className="h-full w-full"
            />
          </div>
        </div>
      </Shell>

      <Shell id="contact" className="pb-20">
        <ContactPanel
          personalEmail={content.site.emails.personal}
          collegeEmail={content.site.emails.college}
          phone={content.site.phone}
          location={content.site.location}
          linkedin={content.site.linkedin}
          resume={content.site.resume}
        />
      </Shell>
    </main>
  );
}
