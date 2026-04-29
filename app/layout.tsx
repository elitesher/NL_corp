import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gtWalsheim = localFont({
  src: [
    {
      path: "../public/fonts/GT-Walsheim-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GT-Walsheim-Regular-Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/GT-Walsheim-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-walsheim",
});

const newLookSupreme = localFont({
  src: [
    {
      path: "../public/fonts/NewLookSupreme-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NewLookSupreme-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-new-look-supreme",
});

export const metadata: Metadata = {
  title: "NEXTLIFE",
  description: "Discover the Future of Sustainable Innovation",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${gtWalsheim.variable} ${newLookSupreme.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
