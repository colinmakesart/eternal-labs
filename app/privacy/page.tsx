import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Eternal Labs",
  description:
    "Privacy Policy for Eternal Labs applications and software services.",
};

const usePurposes = [
  "To provide and maintain our Service, including to monitor the usage of our Service.",
  "To manage Your Account and registration as a user of the Service.",
  "For the performance of a contract for products, items, or services You have purchased or any other contract with Us through the Service.",
  "To contact You by email, telephone calls, SMS, push notifications, or other equivalent forms of electronic communication regarding updates, security updates, or informative communications.",
  "To provide You with news, special offers, and general information about goods, services, and events similar to those You have already purchased or enquired about unless You have opted not to receive such information.",
  "To manage Your requests to Us.",
  "For business transfers, including evaluating or conducting a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.",
  "For other purposes, such as data analysis, identifying usage trends, determining the effectiveness of promotional campaigns, and improving our Service, products, services, marketing, and Your experience.",
];

const legalRequirements = [
  "Comply with a legal obligation",
  "Protect and defend the rights or property of the Company",
  "Prevent or investigate possible wrongdoing in connection with the Service",
  "Protect the personal safety of Users of the Service or the public",
  "Protect against legal liability",
];

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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#050505]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_52%_0%,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0))]" />

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
        <nav
          className="flex items-center gap-5 text-sm font-medium text-[#52525B]"
          aria-label="Legal navigation"
        >
          <Link className="transition hover:text-[#2563EB]" href="/">
            Home
          </Link>
          <a
            className="transition hover:text-[#2563EB]"
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            rel="noreferrer"
          >
            Terms
          </a>
        </nav>
      </header>

      <article className="mx-auto max-w-5xl px-5 pb-20 pt-12 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            Eternal Labs
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52525B]">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#52525B]">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>

        <PolicySection title="Interpretation and Definitions">
          <h3 className="text-lg font-semibold text-[#050505]">
            Interpretation
          </h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h3 className="text-lg font-semibold text-[#050505]">Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party.
            </li>
            <li>
              <strong>Application</strong> refers to any application or software
              program provided by the Company, including First Shift and any
              other applications or software programs provided by the Company.
            </li>
            <li>
              <strong>Company</strong> refers to Eternal Labs, also referred to
              as &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement.
            </li>
            <li>
              <strong>Country</strong> refers to the United States.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Application.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="Collecting and Using Your Personal Data">
          <h3 className="text-lg font-semibold text-[#050505]">
            Types of Data Collected
          </h3>
          <h4 className="font-semibold text-[#050505]">Personal Data</h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but is
            not limited to, Usage Data.
          </p>
          <h4 className="font-semibold text-[#050505]">Usage Data</h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device&apos;s
            Internet Protocol address, browser type, browser version, the pages
            of our Service that You visit, the time and date of Your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including the type of
            mobile device You use, Your mobile device unique ID, the IP address
            of Your mobile device, Your mobile operating system, the type of
            mobile Internet browser You use, unique device identifiers and other
            diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
        </PolicySection>

        <PolicySection title="Use of Your Personal Data">
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc space-y-3 pl-5">
            {usePurposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection title="Exercise Data">
          <p>
            We may process users&apos; step and exercise data to improve user
            experience and help users reach their goals more effectively.
          </p>
          <p>
            All exercise data is processed on the device and is not stored on
            our servers. You may delete your exercise data at any time.
          </p>
        </PolicySection>

        <PolicySection title="Retention of Your Personal Data">
          <p>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations, resolve disputes, and enforce our legal
            agreements and policies.
          </p>
          <p>
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
        </PolicySection>

        <PolicySection title="Transfer of Your Personal Data">
          <p>
            Your information, including Personal Data, is processed at the
            Company&apos;s operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to and maintained on computers located
            outside of Your state, province, country or other governmental
            jurisdiction where the data protection laws may differ than those
            from Your jurisdiction.
          </p>
          <p>
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p>
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in place
            including the security of Your data and other personal information.
          </p>
        </PolicySection>

        <PolicySection title="Delete Your Personal Data">
          <p>
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p>
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p>
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the account
            settings section that allows you to manage Your personal information.
            You may also contact Us to request access to, correct, or delete any
            personal information that You have provided to Us.
          </p>
          <p>
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
        </PolicySection>

        <PolicySection title="Disclosure of Your Personal Data">
          <h3 className="text-lg font-semibold text-[#050505]">
            Business Transactions
          </h3>
          <p>
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h3 className="text-lg font-semibold text-[#050505]">
            Law enforcement
          </h3>
          <p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities.
          </p>
          <h3 className="text-lg font-semibold text-[#050505]">
            Other legal requirements
          </h3>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            {legalRequirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection title="Security of Your Personal Data">
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
        </PolicySection>

        <PolicySection title="Children's Privacy">
          <p>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p>
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent&apos;s consent before We collect and use that
            information.
          </p>
        </PolicySection>

        <PolicySection title="Links to Other Websites">
          <p>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party&apos;s site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the content,
            privacy policies or practices of any third party sites or services.
          </p>
        </PolicySection>

        <PolicySection title="Changes to this Privacy Policy">
          <p>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the
            &quot;Last updated&quot; date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy, You can contact
            Eternal Labs by email:
          </p>
          <p>
            <a
              className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
              href="mailto:hello@eternallabs.dev"
            >
              hello@eternallabs.dev
            </a>
          </p>
        </PolicySection>
      </article>
    </main>
  );
}
