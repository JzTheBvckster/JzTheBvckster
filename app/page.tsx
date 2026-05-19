import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { WorkSummary } from "./components/WorkSummary";
import { ServicesSummary } from "./components/ServicesSummary";
import { AboutSummary } from "./components/AboutSummary";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <StatsSection />
      <WorkSummary />
      <ServicesSummary />
      <AboutSummary />
    </main>
  );
}
