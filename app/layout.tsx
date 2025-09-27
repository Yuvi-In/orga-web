import "@/styles/globals.css";

import { geistMono, geistSans } from "@/styles/fonts";

import { cn } from "@/styles/utils";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Orgalaser Group of Companies",
  description:"Pioneer of Production based Laser Cutting, CNC & Manufacturing Hologram Labels in Sri Lanka",
  keywords:"Laser Cutting, CNC, Hologram Labels, Digital Printing, Wedding Invitations, Orgalaser Group, Orgalaser Hologram Pvt. Ltd., Orgalaser Cutting Wedding Cards & Graphic Items Pvt. Ltd.",
  creator:"Orgalaser Group",
  
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
      </head>
      <body className={cn(geistSans.variable, geistMono.variable)} suppressHydrationWarning>
        {children}
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
        <script src="/vendor/aos/aos.js" defer></script>
        <script src="/vendor/glightbox/js/glightbox.min.js" defer></script>
        <script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" defer></script>
        <script src="/vendor/isotope-layout/isotope.pkgd.min.js" defer></script>
        <script src="/vendor/swiper/swiper-bundle.min.js" defer></script>
        <script src="/vendor/purecounter/purecounter_vanilla.js" defer></script>
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  );
}
