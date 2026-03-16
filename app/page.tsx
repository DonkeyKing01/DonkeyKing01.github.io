import { profile } from "@/profile";
import ScrollReveal from "./scroll-reveal";

/* ── Tiny helpers ──────────────────────────────────────────────── */

function NavBar() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Courses", href: "#courses" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-white/70 border-b border-paper-200/60">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-14">
        <a href="#" className="font-serif text-lg font-semibold text-ink-950 tracking-tight">
          {profile.displayName}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-950/70 hover:text-ink-950 transition-colors link-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cvHref}
            className="text-sm font-medium text-white bg-ink-950 px-4 py-1.5 rounded-full hover:bg-ink-900 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent-600 mb-3">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-950 leading-[1.1]">
      {children}
    </h2>
  );
}

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-px">
        <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <NavBar />

      {/* ════════ HERO ════════ */}
      <section className="section-full">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(${profile.heroBg})` }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full py-32 md:py-0">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
              {profile.tagline}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {profile.name}
            </h1>
            <p className="mt-2 font-serif text-2xl md:text-3xl text-white/80 font-light italic">
              goes by {profile.displayName}
            </p>
            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-[55ch]">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bounce-down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ════════ ABOUT ════════ */}
      <section id="about" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-soft">
                <img
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionLabel>About me</SectionLabel>
              <SectionHeading>
                Economics meets<br />Artificial Intelligence
              </SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-ink-950/70 max-w-[55ch]">
                {profile.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.researchInterests.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-paper-200 bg-paper-100 px-3 py-1 text-sm text-ink-950/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-ink-950/50">Education</p>
                  <p className="mt-1 text-sm font-medium text-ink-950">
                    {profile.education[0].school}
                  </p>
                  <p className="text-sm text-ink-950/60">{profile.education[0].period}</p>
                </div>
                <div>
                  <p className="text-sm text-ink-950/50">Location</p>
                  <p className="mt-1 text-sm font-medium text-ink-950">{profile.location}</p>
                  <p className="text-sm text-ink-950/60">
                    <a href={`mailto:${profile.email}`} className="link-underline">
                      {profile.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PROFESSIONAL EXPERIENCE ════════ */}
      <section id="experience" className="section-warm py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Professional Experience</SectionLabel>
            <SectionHeading>Where I have worked</SectionHeading>
          </div>
          <div className="stagger space-y-8">
            {profile.professionalExperience.map((exp, i) => (
              <div
                key={`exp-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8 md:p-10 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-serif text-xl md:text-2xl font-semibold text-ink-950">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-base text-ink-950/70">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-accent-600 link-underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="font-medium">{exp.company}</span>
                      )}
                      {" "}&middot; {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-ink-950/50 font-mono whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-950/70">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HACKATHON (with background image) ════════ */}
      <section className="section-full">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(${profile.hackathonExperience[0].image})` }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full py-24 md:py-32">
          <div className="fade-up max-w-2xl">
            <SectionLabel>
              <span className="text-white/70">Hackathon</span>
            </SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              {profile.hackathonExperience[0].event}
            </h2>
            {profile.hackathonExperience[0].award && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-500/90 px-4 py-1.5 text-sm font-medium text-white">
                {profile.hackathonExperience[0].award}
              </p>
            )}
            <p className="mt-4 text-base text-white/70">
              {profile.hackathonExperience[0].role} &middot; {profile.hackathonExperience[0].location}
            </p>
            <ul className="mt-6 space-y-2">
              {profile.hackathonExperience[0].bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.hackathonExperience[0].links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {l.label}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ RESEARCH / WORKING PAPERS ════════ */}
      <section id="research" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Academic Research</SectionLabel>
            <SectionHeading>Working Papers</SectionHeading>
          </div>
          <div className="stagger space-y-6">
            {profile.workingPapers.map((p, i) => (
              <div
                key={`paper-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8 md:p-10"
              >
                <p className="font-serif text-xl md:text-2xl font-semibold text-ink-950 leading-snug">
                  {p.title}
                </p>
                <p className="mt-2 text-[15px] text-ink-950/60">{p.authors}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <ArrowLink key={l.href} href={l.href} label={l.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SKILLS & PROJECTS ════════ */}
      <section id="skills" className="section-warm py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Skills & Projects</SectionLabel>
            <SectionHeading>What I work with</SectionHeading>
          </div>
          <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.skillsAndProjects.map((s, i) => (
              <div
                key={`skill-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8"
              >
                <p className="font-serif text-xl font-semibold text-ink-950">{s.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-950/70">{s.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-paper-200 bg-paper-50 px-3 py-1 text-xs text-ink-950/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {s.links.map((l) => (
                    <ArrowLink key={l.href} href={l.href} label={l.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ COURSES ════════ */}
      <section id="courses" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Coursework</SectionLabel>
            <SectionHeading>Academic Foundation</SectionHeading>
          </div>
          <div className="stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.courseCategories.map((cat, i) => (
              <div
                key={`cat-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8"
              >
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-accent-600 mb-4">
                  {cat.category}
                </p>
                <ul className="space-y-3">
                  {cat.courses.map((c, j) => (
                    <li key={j} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] text-ink-950/80">{c.name}</span>
                      {c.note && (
                        <span className="text-sm font-mono font-medium text-accent-600 shrink-0">
                          {c.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ LEADERSHIP (with background image) ════════ */}
      <section className="section-full">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(${profile.leadership[0].image})` }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full py-24 md:py-32">
          <div className="fade-up max-w-2xl">
            <SectionLabel>
              <span className="text-white/70">Leadership</span>
            </SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              {profile.leadership[0].org}
            </h2>
            <p className="mt-4 text-lg text-white/80 font-medium">
              {profile.leadership[0].role}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70 max-w-[55ch]">
              {profile.leadership[0].description}
            </p>
          </div>
        </div>
      </section>

      {/* ════════ CONTACT / FOOTER ════════ */}
      <section id="contact" className="section-warm py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="fade-up">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-950">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-base text-ink-950/60 max-w-[45ch] mx-auto">
              I am open to collaborations, research opportunities, and conversations about economics and AI.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-900"
              >
                {profile.email}
              </a>
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white px-6 py-3 text-sm font-medium text-ink-950/80 transition hover:bg-paper-50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.cvHref}
                className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white px-6 py-3 text-sm font-medium text-ink-950/80 transition hover:bg-paper-50"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-20 border-t border-paper-200 pt-8 mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.14em] uppercase text-ink-950/40">
              {profile.footerNote}
            </p>
            <p className="text-xs text-ink-950/40">
              {profile.name} ({profile.displayName}) &middot; {profile.location}
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
