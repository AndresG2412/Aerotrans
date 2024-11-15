import "./globals.css";
import Navbar2 from "../app/components/Navbar.jsx";
import Footer from "../app/Components/Footer.jsx"

export const metadata = {
    title: "AeroTrans LTDA",
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
