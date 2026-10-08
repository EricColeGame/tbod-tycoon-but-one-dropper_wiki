import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `About ${siteConfig.name}, an independent fan wiki covering guides, upgrade paths, and strategies.`,
};

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>TBOD Tycoon But One Dropper Wiki is an independent fan-built guide hub covering factory progression routes, single-dropper upgrades, automation strategies, and essential game knowledge for new and veteran players alike.</p>
      <p>Our mission is to provide accurate, up-to-date walkthroughs and reference materials to help players build and optimize their tycoon base.</p>
    </LegalPage>
  );
}
