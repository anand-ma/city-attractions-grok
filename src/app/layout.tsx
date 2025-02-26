import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "City Attractions",
  description: "Explore city attractions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
