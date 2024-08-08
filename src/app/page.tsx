import Footer from '@/components/layouts/Footer';
import MainSection from '@/components/layouts/MainSection';
import Navbar from '@/components/layouts/Navbar';
import Projects from '@/components/layouts/Projects';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

export default function Home() {
    return (
        <body>
            <main className="h-screen">
                <Navbar />
                <MainSection />
                <Projects />
                <Footer />
            </main>
        </body>
    );
}
