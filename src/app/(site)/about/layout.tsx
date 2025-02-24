import { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
    title: "Rodrigo Carvalho - Sobre",
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
  