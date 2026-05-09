import { profile } from "@/profile";
import ScrollReveal from "./scroll-reveal";

function NavBar() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#publications" },
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
        <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function Page() {
  const education = profile.education[0];
  const social = profile.socialActivity[0];

  return (
    <>
      <ScrollReveal />
      <NavBar />

      <section className="section-full overflow-hidden bg-[linear-gradient(135deg,#edf6fb_0%,#d9eaf5_48%,#c0d7e6_100%)]">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-white/45 blur-3xl" />
          <div className="absolute right-[-4%] top-1/4 h-72 w-72 rounded-full bg-[#6ea7c8]/18 blur-3xl" />
          <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[#2f6f93]/12 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-16 px-6 py-28 md:grid-cols-[1.1fr_0.9fr] md:py-0">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-ink-950/45">
              Welcome
            </p>
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-ink-950 leading-[1.03] md:text-7xl">
              Hi I&apos;m {profile.name}
            </h1>
            <p className="mt-6 max-w-[34ch] text-xl leading-relaxed text-ink-950/70 md:text-2xl">
              I&apos;m an HCI researcher, AI enthusiast and Product manager
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-white/75 px-5 py-2 text-sm font-medium text-ink-950 shadow-sm backdrop-blur-sm transition hover:bg-white"
                >
                  {link.label}
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
            <div className="relative rounded-[2rem] border border-white/70 bg-white/35 p-4 shadow-[0_32px_80px_rgba(40,76,102,0.20)] backdrop-blur-md">
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="w-full aspect-[4/5] rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-soft">
                <img
                  src="/welcome.jpg"
                  alt="Welcome portrait of Qingyang Jin"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionLabel>About me</SectionLabel>
              <SectionHeading>{education.major} & {education.minor}</SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-ink-950/70 max-w-[55ch]">
                {profile.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.researchInterests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-paper-200 bg-paper-100 px-3 py-1 text-sm text-ink-950/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-ink-950/50">Education</p>
                  <p className="mt-1 text-sm font-medium text-ink-950">
                    School of Design,
                    <br />
                    Shanghai Jiao Tong University
                  </p>
                  <p className="text-sm text-ink-950/60">{education.period}</p>
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

      <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="section-bg"
          style={{ backgroundImage: "url(/boat.jpg)" }}
        />
        <div className="hero-overlay hero-overlay-cool" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>
              <span className="text-cyan-200">Research Experience</span>
            </SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Experience
            </h2>
          </div>
          <div className="stagger space-y-6">
            {profile.academicExperience.map((exp, i) => (
              <div
                key={`exp-${i}`}
                className="rounded-3xl bg-white/12 border border-white/35 p-8 text-white md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-[4px]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-serif text-xl md:text-2xl font-semibold text-white">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-base text-white/80">
                      <span className="font-medium text-white/90">{exp.company}</span>
                      {" "}&middot; {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-white/70 font-mono whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-white/90">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="section-soft py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Publications</SectionLabel>
            <SectionHeading>Research</SectionHeading>
          </div>
          <div className="stagger space-y-6">
            {profile.publications.map((paper, i) => (
              <div
                key={`paper-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {paper.image && (
                    <div className="md:col-span-5">
                      <img
                        src={paper.image}
                        alt=""
                        className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                      />
                    </div>
                  )}
                  <div className={`${paper.image ? "md:col-span-7" : ""} p-8 md:p-10 flex flex-col justify-center`}>
                    <p className="font-serif text-xl md:text-2xl font-semibold text-ink-950 leading-snug">
                      {paper.title}
                    </p>
                    <p className="mt-2 text-[15px] text-ink-950/60">{paper.authors}</p>
                    {paper.abstract && (
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-950/70">
                        {paper.abstract}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {paper.links.map((link) => (
                        <ArrowLink key={link.href} href={link.href} label={link.label} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-full">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(${social.image})` }}
        />
        <div className="hero-overlay hero-overlay-cool" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full py-24 md:py-32">
          <div className="fade-up max-w-2xl">
            <SectionLabel>
              <span className="text-white/70">Social Activity</span>
            </SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              {social.org}
            </h2>
            <p className="mt-4 text-lg text-white/80 font-medium">
              {social.role}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70 max-w-[55ch]">
              {social.description}
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-warm py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Skills & Projects</SectionLabel>
            <SectionHeading>Skills & Projects</SectionHeading>
          </div>
          <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.skillsAndProjects.map((item, i) => (
              <div
                key={`skill-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8"
              >
                <p className="font-serif text-xl font-semibold text-ink-950">{item.title}</p>
                {item.description && (
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-950/70">{item.description}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-paper-200 bg-paper-50 px-3 py-1 text-xs text-ink-950/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <ArrowLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="fade-up mb-12">
            <SectionLabel>Coursework</SectionLabel>
            <SectionHeading>Coursework</SectionHeading>
          </div>
          <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.courseCategories.map((category, i) => (
              <div
                key={`cat-${i}`}
                className="rounded-3xl bg-white/80 border border-paper-200 p-8"
              >
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-accent-600 mb-4">
                  {category.category}
                </p>
                <ul className="space-y-3">
                  {category.courses.map((course, j) => (
                    <li key={j} className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] text-ink-950/80">{course.name}</span>
                      {course.note && (
                        <span className="text-sm font-mono font-medium text-accent-600 shrink-0">
                          {course.note}
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

      <section id="contact" className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="fade-up">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-ink-950">
              Let&apos;s connect
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-900"
              >
                {profile.email}
              </a>
              {profile.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white px-6 py-3 text-sm font-medium text-ink-950/80 transition hover:bg-paper-50"
                >
                  {link.label}
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
