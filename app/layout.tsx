import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import prismadb from "@/lib/prismadb";
import { ToastProvider } from "@/providers/toast-providers";

import { ThemeProvider } from "@/providers/theme-providers"

const DMSns = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreoStudios Dashboard",
  description: "CreoStudios Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={DMSns.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
