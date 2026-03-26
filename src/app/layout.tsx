import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hemant Shah, MD | Family Medicine | Jersey City, NJ",
  description:
    "Comprehensive family healthcare by Dr. Hemant Shah in Jersey City. Preventative care, chronic disease management, and personalized treatment for patients of all ages.",
  keywords: "family medicine, doctor, Jersey City, NJ, preventative care, Dr. Shah",
  openGraph: {
    title: "Hemant Shah, MD | Family Medicine",
    description: "Comprehensive family healthcare in Jersey City, NJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white font-sans">{children}</body>
    </html>
  );
}
