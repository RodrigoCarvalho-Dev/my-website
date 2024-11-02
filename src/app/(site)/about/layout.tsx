import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rodrigo Carvalho - About",
    description: "My About Page",
  };


export default function RootLayoutAbout({
    children,
  }: Readonly<{children: React.ReactNode;}>) {
    return ( 
        <body>
        {children}
        </body>
          
    );
  }
  