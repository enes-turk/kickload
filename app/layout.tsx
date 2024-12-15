import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kickload",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
