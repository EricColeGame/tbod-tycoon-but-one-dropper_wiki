import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Copyright Notice — ${siteConfig.name}`,
  description: `Copyright and intellectual property notice for ${siteConfig.name}.`,
};

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>TBOD Tycoon But One Dropper, Roblox, related game mechanics, logos, and media belong to their respective owners and creators.</p>
      <p>This website is an unofficial community fan wiki created solely for educational and informational guide purposes.</p>
      <p>If you own intellectual property displayed on this site and wish to request removal or review, please contact the site operator at {siteConfig.supportEmail}.</p>
    </LegalPage>
  );
}
