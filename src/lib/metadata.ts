import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://336room.mannez.site"),
  title: "3/10 Room Website",
  description: "เว็บไซต์ของห้อง 3/10",
  icons: [
    {
      url: "/3-10-room.jpg",
      href: "/3-10-room.jpg",
    },
  ],
  openGraph: {
    title: "3/10 Room Website",
    description: "เว็บที่ทำมาเพื่ออะไรก็ไม่รู้",
    url: "https://336room.mannez.site",
    siteName: "336room.mannez.site",
    locale: "en_US",
    type: "website",
    images: ["/background-xp.jpg"],
  },
};
