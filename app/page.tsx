const productHighlights = [
  "AI resume and interview guidance",
  "Designed for first-time job seekers",
  "Simple steps from application to confidence",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#050505]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_52%_0%,rgba(37,99,235,0.18),transparent_36%),radial-gradient(circle_at_90%_18%,rgba(96,165,250,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0))]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="fade-in flex items-center gap-3 text-sm font-semibold tracking-[0.02em]"
          aria-label="Eternal Labs home"
        >
          <span className="grid size-8 place-items-center rounded-full bg-[#050505] text-xs font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.32)]">
            EL
          </span>
          <span>Eternal Labs</span>
        </a>
        <nav
          className="fade-in hidden items-center gap-6 text-sm font-medium text-[#52525B] sm:flex"
          style={{ animationDelay: "90ms" }}
          aria-label="Primary navigation"
        >
          <a className="transition hover:text-[#050505]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#050505]" href="#products">
            Products
          </a>
          <a className="transition hover:text-[#050505]" href="#contact">
            Contact
          </a>
          <a className="transition hover:text-[#050505]" href="/privacy">
            Privacy
          </a>
          <a
            className="transition hover:text-[#050505]"
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            rel="noreferrer"
          >
            Terms
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-10 sm:px-8 lg:px-10"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-4xl">
            <div className="fade-in inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#52525B] shadow-[0_16px_44px_rgba(37,99,235,0.10)] backdrop-blur">
              <span className="size-2 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.85)]" />
              Software Studio
            </div>
            <h1
              className="fade-in mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-[#050505] sm:text-6xl lg:text-7xl xl:text-[5.75rem]"
              style={{ animationDelay: "120ms" }}
            >
              Building software that helps people take their first step.
            </h1>
            <p
              className="fade-in mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#52525B] sm:text-xl"
              style={{ animationDelay: "220ms" }}
            >
              Eternal Labs creates simple, powerful applications designed to
              help people improve their lives.
            </p>
            <div
              className="fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="mailto:hello@eternallabs.dev"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#050505] px-7 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(37,99,235,0.30)] ring-1 ring-[#2563EB]/30 transition hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-[0_22px_54px_rgba(37,99,235,0.42)] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/25"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div
            className="fade-in relative mx-auto aspect-[0.92] w-full max-w-[520px]"
            style={{ animationDelay: "260ms" }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(239,246,255,0.88))] shadow-[0_30px_90px_rgba(37,99,235,0.18)] ring-1 ring-black/10" />
            <div className="absolute inset-5 rounded-lg border border-white bg-white/82 p-5 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                    First Shift
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Career launch</p>
                </div>
                <div className="grid size-12 place-items-center rounded-lg bg-[#050505] text-sm font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.38)]">
                  AI
                </div>
              </div>
              <div className="mt-10 space-y-4">
                <div className="rounded-lg bg-white p-5 shadow-[0_12px_34px_rgba(37,99,235,0.08)]">
                  <div className="h-2 w-24 rounded-full bg-[#2563EB]/70 shadow-[0_0_22px_rgba(37,99,235,0.45)]" />
                  <div className="mt-5 h-3 w-full rounded-full bg-black/10" />
                  <div className="mt-3 h-3 w-4/5 rounded-full bg-black/10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#050505] p-5 text-white shadow-[0_16px_44px_rgba(37,99,235,0.24)]">
                    <p className="text-3xl font-semibold">01</p>
                    <p className="mt-8 text-sm text-white/70">Start here</p>
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow-[0_12px_34px_rgba(37,99,235,0.08)]">
                    <div className="size-10 rounded-lg bg-[#2563EB]/12 shadow-[0_0_24px_rgba(37,99,235,0.24)]" />
                    <p className="mt-9 text-sm font-medium text-[#52525B]">
                      Build confidence
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-[0_12px_34px_rgba(37,99,235,0.08)]">
                  <div className="flex items-center gap-3">
                    <span className="size-3 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.65)]" />
                    <div className="h-3 flex-1 rounded-full bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-black/10 pt-16 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="fade-in-section text-3xl font-semibold tracking-normal sm:text-4xl">
            About Eternal Labs
          </h2>
          <p className="fade-in-section max-w-3xl text-pretty text-xl leading-9 text-[#52525B]">
            Eternal Labs is an independent software company focused on creating
            useful products with exceptional user experiences.
          </p>
        </div>
      </section>

      <section id="products" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="fade-in-section max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              Products
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
              Focused tools for meaningful starts.
            </h2>
          </div>

          <article className="fade-in-section mt-10 grid overflow-hidden rounded-lg border border-black/10 bg-white/86 shadow-[0_28px_90px_rgba(37,99,235,0.12)] backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="inline-flex rounded-full bg-[#2563EB]/10 px-4 py-2 text-sm font-semibold text-[#2563EB] ring-1 ring-[#2563EB]/10">
                Mobile App
              </div>
              <h3 className="mt-8 text-4xl font-semibold tracking-normal">
                First Shift
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#52525B]">
                An AI-powered career app helping teens and young adults land
                their first job with confidence.
              </p>
            </div>
            <div className="bg-[linear-gradient(145deg,rgba(37,99,235,0.12),rgba(255,255,255,0.96))] p-7 sm:p-10 lg:p-12">
              <ul className="space-y-4">
                {productHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-4 rounded-lg bg-white/85 p-5 text-sm font-medium text-[#050505] shadow-[0_12px_34px_rgba(37,99,235,0.08)]"
                  >
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[#2563EB] shadow-[0_0_16px_rgba(37,99,235,0.55)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="bg-[#050505] px-5 py-20 text-white shadow-[inset_0_1px_0_rgba(37,99,235,0.22)] sm:px-8 lg:px-10">
        <div className="fade-in-section mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
                Let&apos;s build the first step.
              </h2>
            </div>
            <a
              href="mailto:hello@eternallabs.dev"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#050505] shadow-[0_0_36px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-[#F8FAFC] hover:shadow-[0_0_48px_rgba(37,99,235,0.42)] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/30"
            >
              hello@eternallabs.dev
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/10 pt-8 text-sm text-[#52525B] sm:flex-row sm:items-center sm:justify-between">
          <p>Eternal Labs © 2026</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="transition hover:text-[#2563EB]" href="https://eternallabs.dev">
              eternallabs.dev
            </a>
            <a className="transition hover:text-[#2563EB]" href="/privacy">
              Privacy Policy
            </a>
            <a
              className="transition hover:text-[#2563EB]"
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              rel="noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
