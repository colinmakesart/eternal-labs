import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Shift Terms of Use | Eternal Labs",
  description:
    "Terms of Use for First Shift, a mobile app published by Eternal Labs LLC.",
};

const supportEmail = "firstshiftapp@gmail.com";

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

function TermsSection({
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

export default function FirstShiftTermsPage() {
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
            First Shift Terms of Use
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52525B]">
            Last updated: June 21, 2026
          </p>
        </div>

        <TermsSection title="Acceptance of Terms">
          <p>
            By downloading, accessing, or using First Shift (&quot;the
            App&quot;), published by Eternal Labs LLC (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;), you agree to be bound by these
            Terms of Use. If you do not agree, do not use the App.
          </p>
        </TermsSection>

        <TermsSection title="Eligibility">
          <p>
            First Shift is intended for users aged 13 and older. By using the
            App, you confirm that you meet this age requirement. If you are under
            18, you confirm you have permission from a parent or guardian to use
            the App.
          </p>
        </TermsSection>

        <TermsSection title="Description of Service">
          <p>
            First Shift helps users build resumes, practice for interviews,
            discover entry-level job opportunities, and track job applications.
            The App uses AI (including Anthropic&apos;s Claude) to help generate
            resume content and provide interview feedback.
          </p>
        </TermsSection>

        <TermsSection title="No Guarantee of Employment Outcomes">
          <p>
            First Shift is a preparation and organizational tool. We do not
            guarantee that using the App will result in a job offer, interview,
            or any specific employment outcome. Hiring decisions are made solely
            by employers and depend on many factors outside our control. The App
            is designed to help improve your preparation, presentation, and odds
            - not to guarantee results.
          </p>
        </TermsSection>

        <TermsSection title="AI-Generated Content">
          <p>
            Resume bullets, interview feedback, and other AI-generated content
            are produced using third-party AI models and may contain errors,
            inaccuracies, or generic suggestions. You are responsible for
            reviewing, editing, and verifying any AI-generated content before
            using it in a real resume, application, or interview. Do not submit
            AI-generated content as factually accurate without your own review.
          </p>
        </TermsSection>

        <TermsSection title="User Accounts">
          <p>
            You are responsible for maintaining the security of your account
            credentials. You agree to provide accurate information when creating
            an account. We reserve the right to suspend or terminate accounts
            that violate these terms.
          </p>
        </TermsSection>

        <TermsSection title="User Content">
          <p>
            You retain ownership of the content you submit to the App (resume
            details, application notes, etc.). By using the App, you grant us a
            limited license to process this content as necessary to provide the
            App&apos;s features, including sending relevant content to
            third-party AI providers as described in our Privacy Policy.
          </p>
        </TermsSection>

        <TermsSection title="Purchases & Refunds">
          <p>
            First Shift offers a one-time purchase to unlock premium features.
            All purchases are processed through Apple&apos;s App Store. Refund
            requests are handled by Apple according to their refund policies, not
            directly by Eternal Labs LLC.
          </p>
        </TermsSection>

        <TermsSection title="Acceptable Use">
          <p>
            You agree not to use the App to submit false, misleading, or harmful
            content, attempt to reverse-engineer or abuse the App&apos;s AI
            features, or use the App for any unlawful purpose.
          </p>
        </TermsSection>

        <TermsSection title="Termination">
          <p>
            You may delete your account at any time from within the App&apos;s
            settings. We reserve the right to suspend or terminate access to the
            App for users who violate these Terms.
          </p>
        </TermsSection>

        <TermsSection title="Disclaimer of Warranties">
          <p>
            The App is provided &quot;as is&quot; without warranties of any kind,
            express or implied. We do not warrant that the App will be
            error-free, uninterrupted, or that AI-generated content will be
            accurate or suitable for your specific situation.
          </p>
        </TermsSection>

        <TermsSection title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Eternal Labs LLC shall not
            be liable for any indirect, incidental, or consequential damages
            arising from your use of the App, including but not limited to
            employment outcomes, missed opportunities, or reliance on
            AI-generated content.
          </p>
        </TermsSection>

        <TermsSection title="Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes will
            be reflected by updating the &quot;Last updated&quot; date at the
            top of this page. Continued use of the App after changes constitutes
            acceptance of the updated Terms.
          </p>
        </TermsSection>

        <TermsSection title="Contact Us">
          <p>
            Questions about these Terms can be sent to:{" "}
            <a
              className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              href={`mailto:${supportEmail}`}
            >
              {supportEmail}
            </a>
          </p>
        </TermsSection>
      </article>
    </main>
  );
}
