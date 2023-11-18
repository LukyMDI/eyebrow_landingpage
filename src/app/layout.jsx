import { Pontano_Sans } from "next/font/google";
import "./globals.css";

const pontano = Pontano_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Studio Camile Quatrin",
    description: "Site em desenvolvimento",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className={pontano.className}>{children}</body>
        </html>
    );
}
