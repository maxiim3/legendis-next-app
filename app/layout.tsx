import Header from "@/app/header";
import Footer from "@/components/organisms/footer.client";
import {italianno, roboto, tangerine} from "@/styles/fonts";
import type {Metadata} from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Legendis",
    description: "Un label Jamais 203 Productions",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            data-theme={"legendisTheme"}
            lang='en'>
            <body
                className={`relative ${roboto.className} ${italianno.className} ${tangerine.className}`}>
                    <Header />
                    {children}
                    <Footer />
            </body>
        </html>
    );
}
