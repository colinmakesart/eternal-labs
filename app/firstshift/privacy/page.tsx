import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Shift Privacy Policy | Eternal Labs",
  description:
    "Privacy Policy for First Shift, a mobile app published by Eternal Labs LLC.",
};

const supportEmail = "firstshiftapp@gmail.com";

const collectedInfo = [
  "Account info: name, email address (via Supabase authentication, including Sign in with Apple)",
  "Resume content: work/activity history, skills, and other details the user enters to build their resume",
  "Interview practice data: text and voice recordings of practice interview answers, transcribed on-device or via Apple's speech recognition (SFSpeechRecognizer)",
  "Application tracker data: jobs the user has applied to, application status, and notes",
  "Purchase data: subscription/purchase status, managed via RevenueCat (no payment card data is collected or stored by us directly - handled by Apple's App Store)",
];

const informationUses = [
  "To create and manage user accounts",
  "To generate resume content and interview feedback via AI",
  "To help users track job applications and send optional reminders",
  "To process purchases and manage entitlements (via RevenueCat)",
  "To improve app functionality and fix bugs",
];

const serviceProviders = [
  "Supabase (authentication and database hosting)",
  "Anthropic (AI processing of resume/interview content, as described above)",
  "RevenueCat (purchase and subscription management)",
  "Apple (App Store purchases, Sign in with Apple)",
];

function PageHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
      <Link
        href="/"
        className="flex items-center gap-3 text-sm font-semibold tracking-[0.02em]"
        aria-label="Eternal Labs home"
      >
        <span className="grid size-8 place-items-center rounded-full bg-[#050505] text-xs font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.32)]">
          EL
        </span>
        <span>Eternal Labs</span>
      </Link>
      <Link
        className="text-sm font-medium text-[#52525B] transition hover:text-[#2563EB]"
        href="/"
      >
        Home
      </Link>
    </header>
  );
}

function PolicySection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-t border-black/10 py-10">
      <h2 className="text-2xl font-semibold tracking-normal text-[#050505]">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-[#52525B]">
        {children}
      </div>
    </section>
  );
}

export default function FirstShiftPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#050505]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_52%_0%,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0))]" />
      <PageHeader />

      <article className="mx-auto max-w-5xl px-5 pb-20 pt-12 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            First Shift
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
            First Shift Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52525B]">
            Last updated: June 21, 2026
          </p>
        </div>

        <PolicySection title="Intro">
          <p>
            First Shift is a mobile app published by Eternal Labs LLC that helps
            teenagers and young adults find their first job by building resumes,
            practicing for interviews, and tracking job applications. This
            policy explains what information we collect, how it&apos;s used, and
            how it&apos;s protected.
          </p>
        </PolicySection>

        <PolicySection title="Information We Collect">
          <ul className="list-disc space-y-3 pl-5">
            {collectedInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection title="How We Use AI (Claude by Anthropic)">
          <p>
            First Shift uses Anthropic&apos;s Claude AI to generate resume bullet
            points and provide interview feedback based on what the user enters.
            Resume content and interview answers may be sent to Anthropic&apos;s
            API to generate this content. We do not use this data to train AI
            models. Users should avoid entering highly sensitive personal
            information (like Social Security numbers or financial account
            details) into the app.
          </p>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <ul className="list-disc space-y-3 pl-5">
            {informationUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection title="Data Sharing">
          <p>
            We do not sell user data. We share data only with the service
            providers required to operate the app:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            {serviceProviders.map((provider) => (
              <li key={provider}>{provider}</li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection title="Data Retention & Deletion">
          <p>
            Users can delete their account and associated data at any time from
            within the app&apos;s settings. Deleting an account removes the
            user&apos;s resume data, interview practice history, and application
            tracker data from our systems, subject to standard backup retention
            periods.
          </p>
        </PolicySection>

        <PolicySection title="Children's Privacy">
          <p>
            First Shift is intended for users aged 13 and older. We do not
            knowingly collect personal information from children under 13. If you
            believe a child under 13 has provided us with personal information,
            contact us at the email below and we will delete it.
          </p>
        </PolicySection>

        <PolicySection title="Security">
          <p>
            We use industry-standard practices to protect user data, including
            encrypted connections (HTTPS) and access-controlled databases
            (Supabase Row Level Security). No method of transmission or storage
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </PolicySection>

        <PolicySection title="Changes to This Policy">
          <p>
            We may update this privacy policy from time to time. Material
            changes will be reflected by updating the &quot;Last updated&quot;
            date at the top of this page.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            Questions about this policy or your data can be sent to:{" "}
            <a
              className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              href={`mailto:${supportEmail}`}
            >
              {supportEmail}
            </a>
          </p>
        </PolicySection>
      </article>
    </main>
  );
}
