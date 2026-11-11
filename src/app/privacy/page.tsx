import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

// Template text. Have it reviewed by a legal professional before relying on it.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This website for {business.name} does not use accounts, forms or a database, and it does not store the personal
        details of visitors on our servers.
      </p>
      <h2>How you contact us</h2>
      <p>
        When you tap WhatsApp, Call or Email, your message goes through those services. The details you share
        (such as your name, phone number and event plans) are used only to reply to your enquiry and prepare a
        quotation. Those services have their own privacy policies.
      </p>
      <h2>Third-party content</h2>
      <p>
        The location section may load an embedded Google Map, and the Instagram button opens our Instagram profile.
        These services may set their own cookies once you interact with them.
      </p>
      <h2>Changes</h2>
      <p>We may update this page from time to time. The latest version is always available on this website.</p>
    </LegalPage>
  );
}
