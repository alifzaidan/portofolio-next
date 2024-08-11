import Footer from '@/components/layouts/Footer';
import MainSection from '@/components/layouts/MainSection';
import Navbar from '@/components/layouts/Navbar';
import Projects from '@/components/layouts/Projects';

export default function Home() {
    return (
        <body>
            <main>
                <MainSection />
                <Projects />
                <Footer />
            </main>
        </body>
    );
}
