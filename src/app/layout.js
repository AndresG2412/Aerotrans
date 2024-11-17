import "./globals.css";
// import Navbar2 from "@/app/Components/Navbar";

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
                <div className="flex flex-col">
                    <Navbar2/>
                    <div>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
