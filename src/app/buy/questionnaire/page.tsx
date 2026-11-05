import type { Metadata } from "next";
import { Questionnaire } from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Buyer questionnaire",
  description: "Register your buyer brief confidentially with BVOSales.",
  robots: { index: false },
};

export default function BuyerQuestionnairePage() {
  return <Questionnaire type="buyer" />;
}
