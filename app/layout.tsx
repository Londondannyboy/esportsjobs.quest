import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://esportsjobs.quest/#website",
      name: "Esports Jobs",
      url: "https://esportsjobs.quest",
      description: "Leading esports recruitment agency connecting talent with esports jobs. We recruit pro players, coaches, content creators, and gaming professionals.",
      publisher: {
        "@id": "https://esportsjobs.quest/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://esportsjobs.quest/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://esportsjobs.quest/#organization",
      name: "Esports Jobs",
      url: "https://esportsjobs.quest",
      description: "The UK's leading esports recruitment agency connecting gaming professionals with esports jobs in competitive gaming, streaming, content creation, and esports organisations.",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      knowsAbout: [
        "Esports Recruitment Agency",
        "Esports Jobs",
        "Gaming Careers",
        "Esports Recruitment",
        "Gaming Industry Jobs",
        "Pro Player Opportunities",
        "Esports Coach Jobs",
        "Content Creator Jobs",
        "Tournament Organiser Jobs"
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/#webpage",
      url: "https://esportsjobs.quest",
      name: "Esports Recruitment Agency | Esports Jobs UK",
      description: "Leading esports recruitment agency connecting talent with esports jobs. We recruit pro players, coaches, content creators, and esports professionals for top gaming organisations.",
      isPartOf: {
        "@id": "https://esportsjobs.quest/#website"
      },
      about: {
        "@id": "https://esportsjobs.quest/#organization"
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://esportsjobs.quest/og-image.png"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of esports jobs are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports jobs span many roles including professional players, coaches, analysts, content creators, streamers, tournament organisers, event managers, marketing specialists, social media managers, broadcast producers, shoutcasters, and esports team management positions.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a job in esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by building skills relevant to your target role, whether that's gaming ability, content creation, event management, or marketing. Build your network through Discord servers, Twitter, and industry events. Create a portfolio showcasing your work and apply for entry-level positions or internships.",
          },
        },
        {
          "@type": "Question",
          name: "What qualifications do I need for esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements vary by role. Pro players need exceptional gaming skills and competitive experience. Other roles may require degrees in marketing, media production, or business. Many esports jobs value practical experience and portfolio work over formal qualifications.",
          },
        },
        {
          "@type": "Question",
          name: "Are esports jobs remote or in-person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many esports jobs are remote, especially content creation, social media, and some coaching roles. However, event management, broadcast production, and team house positions typically require in-person attendance. Hybrid arrangements are increasingly common.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average salary for esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salaries vary widely. Entry-level positions may start at £20,000-£30,000. Mid-level roles like content managers or coaches can earn £35,000-£60,000. Senior positions and successful pro players can earn £100,000 or more. Top esports professionals earn millions.",
          },
        },
        {
          "@type": "Question",
          name: "How competitive are esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports jobs are highly competitive due to industry passion. Standing out requires demonstrable skills, a strong portfolio, and networking. Entry-level positions receive many applications, so gaining experience through volunteering or freelance work is valuable.",
          },
        },
        {
          "@type": "Question",
          name: "What companies hire for esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major employers include esports organisations like Fnatic, Team Liquid, and Cloud9, game publishers like Riot Games and Blizzard, tournament organisers like ESL and BLAST, streaming platforms like Twitch, and gaming hardware companies like Razer and Logitech.",
          },
        },
        {
          "@type": "Question",
          name: "Can I work in esports without being a pro gamer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The esports industry needs professionals in marketing, business development, event management, broadcast production, journalism, community management, HR, finance, and many other traditional business roles. Gaming knowledge helps but isn't always required.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://esportsjobs.quest"
        }
      ]
    }
  ],
};

export const metadata: Metadata = {
  title: "Esports Recruitment Agency | Esports Jobs UK",
  description:
    "Leading esports recruitment agency connecting talent with esports jobs. We recruit pro players, coaches, content creators, and esports professionals for top gaming organisations.",
  authors: [{ name: "Esports Jobs" }],
  keywords: [
    "esports recruitment agency",
    "esports jobs",
    "esports recruitment",
    "esports careers",
    "gaming jobs",
    "esports job board",
    "pro gaming jobs",
    "esports coach jobs",
    "content creator jobs",
    "streamer jobs",
    "tournament organiser jobs",
    "esports management jobs",
    "gaming industry careers",
    "esports analyst jobs",
    "shoutcaster jobs",
    "esports marketing jobs",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Esports Recruitment Agency | Esports Jobs UK",
    description:
      "Leading esports recruitment agency connecting talent with esports jobs. We recruit pro players, coaches, content creators, and esports professionals.",
    siteName: "Esports Jobs",
    locale: "en_GB",
    images: [
      {
        url: "https://esportsjobs.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Esports Recruitment Agency - Esports Jobs and Gaming Careers",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruitment Agency | Esports Jobs UK",
    description:
      "Leading esports recruitment agency connecting talent with esports jobs. We recruit pro players, coaches, and esports professionals.",
    images: ["https://esportsjobs.quest/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://esportsjobs.quest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
