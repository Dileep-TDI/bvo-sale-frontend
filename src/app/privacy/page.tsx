import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for BVOSales.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-[720px]">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy policy" }]} />
        <h1 className="display h1-page mt-2 mb-6">Privacy policy</h1>
        <p className="lead">
          Content to come. Questionnaires on this site collect personal information. The full privacy policy will
          be published here before launch.
        </p>
      </div>
    </section>
  );
}
