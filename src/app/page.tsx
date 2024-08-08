import MainSection from '@/components/layouts/MainSection';
import Navbar from '@/components/layouts/Navbar';

export default function Home() {
    return (
        <body>
            <main className="h-screen">
                <Navbar />
                <MainSection />
            </main>
        </body>
    );
}
