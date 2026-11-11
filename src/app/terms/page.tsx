import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
};

// Template text. Have it reviewed by a legal professional before relying on it.
export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        By using this website you agree to the terms below. {business.name} provides event planning and management
        services. This website is for information and enquiries only.
      </p>
      <h2>Packages and pricing</h2>
      <p>
        Package prices shown on this website are starting points. A written quotation, confirmed by both parties, is
        required before any booking. Prices may change based on date, venue, guest count and services selected.
      </p>
      <h2>Bookings</h2>
      <p>
        A booking is confirmed only after you accept the quotation and any agreed advance is received. Payment and
        cancellation terms are shared in the quotation. No payments are taken on this website.
      </p>
      <h2>Photographs and content</h2>
      <p>
        Photographs and designs on this website belong to {business.name} or are used with permission. Please do not
        copy them without written consent.
      </p>
      <h2>Liability</h2>
      <p>
        We take care to keep the information here accurate, but it may change without notice. We are not responsible
        for losses arising from reliance on this website alone.
      </p>
    </LegalPage>
  );
}
