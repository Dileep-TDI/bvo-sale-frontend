import type { Metadata } from "next";
import { Questionnaire } from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Adviser questionnaire",
  description: "Refer a client for a valuation-led business sale, confidentially.",
  robots: { index: false },
};

export default function AdviserQuestionnairePage() {
  return <Questionnaire type="adviser" />;
}
