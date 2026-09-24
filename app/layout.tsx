import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://salesunit.ru"),

  title: {
    default: "SalesUnit | Готовая функция продаж, которой легко управлять",
    template: "%s | SalesUnit",
  },

  description:
    "Проектирование и построение системы продаж для роста бизнеса. Создаю управляемую коммерческую функцию, которая не зависит от конкретных сотрудников.",

  keywords: [
    "система продаж",
    "построение отдела продаж",
    "консалтинг продаж",
    "коммерческая функция",
    "РОП",
    "руководитель отдела продаж",
    "B2B продажи",
    "SaaS продажи",
    "аудит продаж",
    "управление продажами",
  ],

  authors: [{ name: "Денис Доценко" }],
  creator: "Денис Доценко",
  publisher: "SalesUnit",
  applicationName: "SalesUnit",

  other: {
    "apple-mobile-web-app-title": "SalesUnit",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://salesunit.ru",
    siteName: "SalesUnit",
    title: "SalesUnit | Готовая функция продаж, которой легко управлять",
    description:
      "Проектирование и построение системы продаж для роста бизнеса. Создаю управляемую коммерческую функцию, которая не зависит от конкретных сотрудников.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SalesUnit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SalesUnit | Готовая функция продаж, которой легко управлять",
    description:
      "Проектирование и построение системы продаж для роста бизнеса.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://salesunit.ru",
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <meta name="google" content="notranslate" />
        <link
          rel="preload"
          href="/fonts/suisseintl-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/suisseintl-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/suisseintl-semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/suisseintl-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
