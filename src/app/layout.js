import "./globals.css";
import Footer from "../app/Components/Footer";

export const metadata = {
    title: "AeroTrans LTDA"
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <div className="flex flex-col">
                    <div>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
