import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clever - Sales Recruitment Platform",
  description: "Connecting top salespeople with great opportunities",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} min-h-screen 
          bg-gradient-to-br from-blue-50 via-white to-purple-50 
          dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 
          text-foreground`}
        >
        {children}
        </body>
        </html>
      </ClerkProvider>
  );
}
