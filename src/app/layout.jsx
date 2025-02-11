import "./globals.css";
import Template from "@/template";

import dynamic from "next/dynamic";
const Navbar2 = dynamic(
    () => import("@/app/Components/Navbar"),
    {
        ssr: false,
    }
)

const Footer = dynamic(
    () => import("@/app/Components/Footer"),
    {
        ssr: false,
    }
)

export const metadata = {
    title: "AeroTrans LTDA"
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <div className="">
                    <Navbar2/>
                        <Template>
                            {children}
                        </Template>
                    {/* <Footer/> */}
                </div>
            </body>
        </html>
    );
}
