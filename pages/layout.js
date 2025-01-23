import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/main.scss";
// import "./styles/primary.scss";

export const metadata: Metadata = {
  title: "Game boiler-plate - testing",
  description: "Game description",
  keywords: "conveyor, game, education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
