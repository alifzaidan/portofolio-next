import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layouts/Navbar';

export const metadata: Metadata = {
    title: 'Muchammad Alif Zaidan - Frontend Web Developer',
    description:
        'Hi, this is Alif. I am a frontend web developer based in Malang, Indonesia. I am passionate about developing cutting-edge interfaces and delivering smiles.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-acumin bg-primary">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
