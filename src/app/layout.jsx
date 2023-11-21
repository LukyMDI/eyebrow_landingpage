import { roboto } from "@/styles/fonts/fonts";

import "./globals.css";

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
