import type { Metadata } from "next";
import "./globals.css";



const inter = ({
  variable : '--font-inter',
});

export const metadata: Metadata = {
  title: "Rodrigo Carvalho - Home",
  description: "My Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>      
      <body
        className={`bg-zinc-900 text-zinc-50 ${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
