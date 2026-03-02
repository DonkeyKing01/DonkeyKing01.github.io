import { profile } from "@/profile";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[12px] font-medium tracking-[0.16em] uppercase text-ink-950/70">
      {children}
    </h2>
  );
}

function ExternalLink({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white/70 px-3 py-1.5 text-sm text-ink-950/85 shadow-soft backdrop-blur-sm transition hover:-translate-y-[1px] hover:bg-white"
      rel="noreferrer"
      target="_blank"
    >
      <span className="font-medium">{label}</span>
      <span aria-hidden="true" className="text-ink-950/35">
        (external)
      </span>
    </a>
  );
}

function MutedLine({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-ink-950/70">{children}</p>;
}

function ResourcePill({ href, label }: { href: string; label: string }) {
  const isActive = href.trim().length > 0 && href.trim() !== "#";
  const base =
    "inline-flex items-center rounded-full border border-paper-200 bg-paper-50 px-3 py-1 text-sm text-ink-950/75 transition";

  if (!isActive) {
    return <span className={`${base} cursor-not-allowed opacity-60`}>{label}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} hover:bg-white hover:-translate-y-[1px]`}
    >
      {label}
    </a>
  );
}

export default function Page() {
  return (
    <main className="page-in">
      <div className="mx-auto max-w-[1100px] px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <header className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-accent-600 shadow-[0_0_0_5px_rgba(15,118,110,0.12)]" />
              <p className="text-xs tracking-[0.18em] uppercase text-ink-950/55">
                {profile.tagline}
              </p>
            </div>

            <h1 className="mt-5 font-semibold tracking-[-0.02em] text-[40px] leading-[1.03] md:text-[56px]">
              {profile.name}
            </h1>

            <p className="mt-4 max-w-[66ch] text-[16px] leading-relaxed text-ink-950/75 md:text-[17px]">
              {profile.bio}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.links.map((l, i) => (
                <ExternalLink key={`${l.label}:${l.href}:${i}`} href={l.href} label={l.label} />
              ))}
            </div>

            <div className="mt-8">
              <SectionTitle>Research interests</SectionTitle>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.researchInterests.map((x, i) => (
                  <span
                    key={`${x}:${i}`}
                    className="rounded-full border border-paper-200 bg-white/60 px-3 py-1 text-sm text-ink-950/75 backdrop-blur-sm"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="space-y-4">
              <div className="rounded-[28px] bg-white/60 p-3 shadow-frame backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[22px] bg-paper-50">
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-950/10" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
                  <img
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-paper-200 bg-white/65 p-6 shadow-soft backdrop-blur-sm">
                <SectionTitle>At a glance</SectionTitle>

                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-ink-950/80">Email</dt>
                    <dd className="mt-1 text-[15px] text-ink-950/70">
                      <a
                        className="underline underline-offset-4 hover:text-ink-950"
                        href={`mailto:${profile.email}`}
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-ink-950/80">Location</dt>
                    <dd className="mt-1 text-[15px] text-ink-950/70">{profile.location}</dd>
                  </div>

                  <div className="pt-1">
                    <a
                      className="inline-flex w-full items-center justify-between rounded-2xl border border-paper-200 bg-white px-4 py-3 text-sm font-medium text-ink-950/85 transition hover:-translate-y-[1px] hover:bg-paper-50 active:translate-y-[1px]"
                      href={profile.cvHref}
                    >
                      <span>Curriculum Vitae (PDF)</span>
                      <span aria-hidden="true" className="text-ink-950/35">
                        -&gt;
                      </span>
                    </a>
                    <p className="mt-2 text-xs text-ink-950/55">
                      Add your CV file at <span className="font-mono">public/cv.pdf</span>.
                    </p>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-y-14 md:mt-12 md:grid-cols-12 md:gap-x-10 md:gap-y-16 md:items-start">
          <section id="papers" className="md:col-span-6">
            <SectionTitle>Working papers</SectionTitle>
            <ul className="mt-5 space-y-5">
              {profile.workingPapers.map((p, i) => (
                <li
                  key={`${p.title}:${i}`}
                  className="rounded-3xl border border-paper-200 bg-white/55 p-6 backdrop-blur-sm"
                >
                  <p className="text-[17px] font-semibold leading-snug text-ink-950">{p.title}</p>
                  <MutedLine>{p.authors}</MutedLine>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.links.map((l, j) => (
                      <ResourcePill key={`${l.label}:${l.href}:${j}`} href={l.href} label={l.label} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="education" className="md:col-span-6">
            <SectionTitle>Education</SectionTitle>
            <ul className="mt-5 space-y-4">
              {profile.education.map((e, i) => (
                <li
                  key={`${e.school}:${i}`}
                  className="rounded-3xl border border-paper-200 bg-white/55 p-6 backdrop-blur-sm"
                >
                  <p className="text-[16px] font-semibold text-ink-950">{e.school}</p>
                  <MutedLine>{e.degree}</MutedLine>
                  <p className="mt-2 text-sm text-ink-950/65">{e.period}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="skills" className="md:col-span-6">
            <SectionTitle>Relevant skills and projects</SectionTitle>
            <ul className="mt-5 space-y-4">
              {profile.skillsAndProjects.map((p, i) => (
                <li
                  key={`${p.title}:${i}`}
                  className="rounded-3xl border border-paper-200 bg-white/55 p-6 backdrop-blur-sm"
                >
                  <p className="text-[16px] font-semibold leading-snug text-ink-950">{p.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-950/70">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span
                        key={`${t}:${j}`}
                        className="rounded-full border border-paper-200 bg-paper-50 px-3 py-1 text-sm text-ink-950/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.links.map((l, j) => (
                      <ResourcePill key={`${l.label}:${l.href}:${j}`} href={l.href} label={l.label} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="classes" className="md:col-span-6">
            <SectionTitle>Relevant Class</SectionTitle>
            <ul className="mt-5 space-y-4">
              {profile.relevantClasses.map((t, i) => (
                <li
                  key={`${t.name}:${i}`}
                  className="rounded-3xl border border-paper-200 bg-white/55 p-6 backdrop-blur-sm"
                >
                  <p className="text-[16px] font-semibold text-ink-950">{t.name}</p>
                  <MutedLine>{t.detail}</MutedLine>
                  {t.note ? <p className="mt-3 text-sm text-ink-950/65">{t.note}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="hobbies" className="mt-14 md:mt-16">
          <SectionTitle>Interests</SectionTitle>
          <div className="mt-5 rounded-3xl border border-paper-200 bg-white/55 p-6 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((h, i) => (
                <span
                  key={`${h}:${i}`}
                  className="rounded-full border border-paper-200 bg-paper-50 px-3 py-1 text-sm text-ink-950/75"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-paper-200 pt-8">
          <p className="text-xs tracking-[0.18em] uppercase text-ink-950/55">
            {profile.footerNote}
          </p>
        </footer>
      </div>
    </main>
  );
}
