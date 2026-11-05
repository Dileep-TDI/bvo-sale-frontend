import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Terms and conditions for BVOSales.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container max-w-[720px]">
        <Breadcrumbs
          items={[{ href: "/", label: "Home" }, { label: "Terms and conditions" }]}
        />
        <h1 className="display h1-page mt-2 mb-6">Terms and conditions</h1>
        <p className="lead">
          Content to come. The full terms and conditions will be published here before launch.
        </p>
      </div>
    </section>
  );
}
