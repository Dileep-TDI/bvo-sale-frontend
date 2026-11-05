import type { Metadata } from "next";
import { Questionnaire } from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Seller questionnaire",
  description: "A short, confidential questionnaire about your business and sale plans.",
  robots: { index: false },
};

export default function SellerQuestionnairePage() {
  return <Questionnaire type="seller" />;
}
