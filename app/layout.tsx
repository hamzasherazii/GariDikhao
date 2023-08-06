import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "GariDikhao",
  description: "A website created by Hamza Sherazi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
