import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Shift Support | Eternal Labs",
  description:
    "Support page for First Shift, a mobile app published by Eternal Labs LLC.",
};

const supportEmail = "firstshiftapp@gmail.com";

const faqs = [
  {
    question: "How do I delete my account?",
    answer:
      "You will be able to delete your account from the app's settings. This answer is a placeholder and can be replaced with exact in-app steps.",
  },
  {
    question: "How do I restore a purchase?",
    answer:
      "Use the restore purchase option in the app to reconnect your App Store subscription or purchase. This placeholder can be updated with the final screen name.",
  },
  {
    question: "How does First Shift use AI?",
    answer:
      "First Shift uses AI to help generate resume content and provide interview practice feedback based on information you enter. This placeholder can be expanded with more detail.",
  },
  {
    question: "How do I report a bug?",
    answer:
      "Email the support address on this page with a short description of the issue and your device details. This placeholder can be updated with any preferred bug report format.",
  },
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

export default function FirstShiftSupportPage() {
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
            First Shift Support
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52525B]">
            Need help with First Shift? We&apos;re here to help.
          </p>
        </div>

        <section className="border-t border-black/10 py-10">
          <h2 className="text-2xl font-semibold tracking-normal text-[#050505]">
            Contact
          </h2>
          <p className="mt-5 text-base leading-8 text-[#52525B]">
            Contact email:{" "}
            <a
              className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              href={`mailto:${supportEmail}`}
            >
              {supportEmail}
            </a>
          </p>
        </section>

        <section className="border-t border-black/10 py-10">
          <h2 className="text-2xl font-semibold tracking-normal text-[#050505]">
            FAQ
          </h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <div
                className="rounded-lg border border-black/10 bg-white/85 p-5 shadow-[0_12px_34px_rgba(37,99,235,0.08)]"
                key={faq.question}
              >
                <h3 className="text-lg font-semibold tracking-normal text-[#050505]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#52525B]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
