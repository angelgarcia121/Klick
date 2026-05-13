import { HowItWorks } from "../components/HowItWorks";
import { Showcase } from "../components/Showcase";
import { CTA } from "../components/CTA";

export function HowItWorksPage() {
  return (
    <main className="pt-24">
      <HowItWorks />
      <Showcase />
      <CTA />
    </main>
  );
}
