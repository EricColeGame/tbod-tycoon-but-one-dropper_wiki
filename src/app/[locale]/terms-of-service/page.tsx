import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${siteConfig.name}`,
  description: `Terms of service and acceptable usage rules for ${siteConfig.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for TBOD Tycoon But One Dropper. Content is provided for informational and entertainment purposes only.</p>
      <p>Game systems, codes, values, and update details may change without notice. Always verify important information in-game or through official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Roblox or game developer property.</p>
    </LegalPage>
  );
}
