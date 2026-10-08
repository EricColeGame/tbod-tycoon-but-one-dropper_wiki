export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "TBOD Tycoon But One Dropper Wiki",
  shortName: "TBOD Tycoon But One Dropper",
  logoText: "TBOD",
  tagline: "Roblox One Dropper Tycoon Simulator Guides & Codes",
  description: "TBOD Tycoon But One Dropper Wiki provides Roblox tycoon guides, upgrade tips, gameplay strategies, codes, and everything players need to build their ultimate factory.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tbod-tycoon-but-one-dropper.wiki",
  supportEmail: "support@tbod-tycoon-but-one-dropper.wiki",
  gameUrl: "https://www.roblox.com/games/17781237968/Tycoon-But-One-Dropper",
  heroVideoId: "c6yGcoQmLKA",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
