import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "Studio Camile Quatrin",
    description: "Site em desenvolvimento",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
