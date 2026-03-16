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
      <section className="section-full overflow-hidden bg-[linear-gradient(135deg,#f7f2ea_0%,#efe4d7_48%,#d8c6b8_100%)]">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-white/45 blur-3xl" />
          <div className="absolute right-[-4%] top-1/4 h-72 w-72 rounded-full bg-[#c89e7a]/20 blur-3xl" />
          <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[#8b6b52]/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-16 px-6 py-28 md:grid-cols-[1.1fr_0.9fr] md:py-0">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-ink-950/45">
              Welcome
            </p>
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-ink-950 leading-[1.03] md:text-7xl">
              Hi I&apos;m Yuecheng He, you can call me Reed.
            </h1>
            <p className="mt-6 max-w-[28ch] text-xl leading-relaxed text-ink-950/70 md:text-2xl">
              I&apos;m an Information system researcher and Product manager
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-white/75 px-5 py-2 text-sm font-medium text-ink-950 shadow-sm backdrop-blur-sm transition hover:bg-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-ink-950 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-ink-900"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px] md:max-w-[420px]">
            <div className="relative aspect-square rounded-full border border-white/70 bg-white/35 p-4 shadow-[0_32px_80px_rgba(90,65,45,0.22)] backdrop-blur-md">
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),rgba(255,255,255,0.12))]" />
              <img
                src="/welcome.jpg"
                alt="Welcome portrait of Yuecheng He"
                className="relative h-full w-full rounded-full border border-white/60 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 bounce-down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ink-950/40">
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

      {/* ════════ PROFESSIONAL EXPERIENCE (Fudan.jpg background) ════════ */}
      <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(/Fudan.jpg)` }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>
              <span className="text-white/70">Professional Experience</span>
            </SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Where I have worked
            </h2>
          </div>
          <div className="stagger space-y-8">
            {profile.professionalExperience.map((exp, i) => (
              <div
                key={`exp-${i}`}
                className="rounded-3xl bg-black/30 border border-white/10 p-8 md:p-10 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-serif text-xl md:text-2xl font-semibold text-white">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-base text-white/70">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-accent-500 link-underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="font-medium text-white/90">{exp.company}</span>
                      )}
                      {" "}&middot; {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-white/50 font-mono whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
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

      {/* ════════ RESEARCH / WORKING PAPERS (with Academic.jpg + abstract) ════════ */}
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
                className="rounded-3xl bg-white/80 border border-paper-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {p.image && (
                    <div className="md:col-span-5">
                      <img
                        src={p.image}
                        alt=""
                        className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                      />
                    </div>
                  )}
                  <div className={`${p.image ? "md:col-span-7" : ""} p-8 md:p-10 flex flex-col justify-center`}>
                    <p className="font-serif text-xl md:text-2xl font-semibold text-ink-950 leading-snug">
                      {p.title}
                    </p>
                    <p className="mt-2 text-[15px] text-ink-950/60">{p.authors}</p>
                    {p.abstract && (
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-950/70">
                        {p.abstract}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <ArrowLink key={l.href} href={l.href} label={l.label} />
                      ))}
                    </div>
                  </div>
                </div>
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

      {/* ════════ COURSES / ACADEMIC FOUNDATION ════════ */}
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
