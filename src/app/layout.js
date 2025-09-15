import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from 'sonner';
import AntConfigProvider from "@/providers/AntConfigProvider";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import FooterContainer from "@/components/Footer/FooterContainer";
import ReactQueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TalentFlow | Find Your Next Opportunity",
  description: "TalentFlow connects top talent with leading companies. Explore jobs, showcase your skills, and take the next step in your career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntConfigProvider>
          <NextAuthSessionProvider>
            <ReactQueryProvider>
              <Toaster />
              <Navbar />
              <div className="min-h-[calc(100vh-613px)] md:min-h-[calc(100vh-345px)] ">
                {children}
              </div>
              <FooterContainer />
            </ReactQueryProvider>
          </NextAuthSessionProvider>
        </AntConfigProvider>
      </body>
    </html>
  );
}
