import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesUnit | Готовая функция продаж, которой легко управлять",
  description: "Построение системы продаж для бизнеса",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
