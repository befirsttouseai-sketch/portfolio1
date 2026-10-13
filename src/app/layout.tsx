import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { personalInfo } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#101B35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Pemba Sherpa | Frontend Web Developer",
    template: "%s | Pemba Sherpa",
  },
  description:
    "Explore Pemba Sherpa's frontend development portfolio, selected projects, technical skills, and contact information.",
  keywords: [
    "Pemba Sherpa",
    "Frontend Web Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Web Developer Nepal",
    "Responsive Web Design",
    "UI/UX Implementation",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: "Pemba Sherpa | Frontend Web Developer",
    description:
      "Explore Pemba Sherpa's frontend development portfolio, selected projects, technical skills, and contact information.",
    type: "website",
    locale: "en_US",
    siteName: "Pemba Sherpa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pemba Sherpa | Frontend Web Developer",
    description:
      "Explore Pemba Sherpa's frontend development portfolio, selected projects, technical skills, and contact information.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      description: personalInfo.primaryRole,
      address: {
        "@type": "PostalAddress",
        addressCountry: personalInfo.location,
      },
      knowsAbout: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Responsive Web Design",
        "Web Accessibility",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      name: "Pemba Sherpa Portfolio",
      description:
        "Explore Pemba Sherpa's frontend development portfolio, selected projects, technical skills, and contact information.",
      publisher: {
        "@id": "#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary font-sans selection:bg-orange/20 selection:text-navy">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
