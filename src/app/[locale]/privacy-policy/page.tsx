import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `Privacy policy and data protection disclosures for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for TBOD Tycoon But One Dropper. We do not request account credentials, Roblox passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Roblox, Discord, YouTube, or community platforms. Those services are governed by their own respective privacy policies.</p>
    </LegalPage>
  );
}
