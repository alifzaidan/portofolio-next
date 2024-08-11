import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { RiFlutterFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';

export default function About() {
    return (
        <main className="bg-secondary">
            <section id="about" className="container py-24">
                <h1 className="font-degular text-6xl font-medium mb-12">Hello, I am Muchammad Alif Zaidan</h1>
                <div className="text-xl space-y-8">
                    <p>A frontend developer pursuing a passion for creating engaging and innovative web experiences ☻</p>
                    <p>
                        Currently studying in the 7th semester at Teknik Informatika UIN Maulana Malik Ibrahim Malang. I’m also working as a
                        freelancer at a startup called Ekata and actively involved in the community as a former lead of Google Developer Student Club.
                    </p>
                    <p>
                        My adventure in technology began during my time in college, and I&apos;m always eager to connect and share experiences. Feel
                        free to reach out via the links below.
                    </p>
                </div>
                <hr className="border-black my-16" />
                <h2 className="font-degular text-4xl font-medium mb-12">Work and Community Experience</h2>
                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-degular font-medium">Freelance as Web Developer</h4>
                            <p className="text-xl">PT. Ekata Technology Indonesia</p>
                        </div>
                        <p className="text-xl">June 2023 - Present</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-degular font-medium">Internship as Information Technology Engineer</h4>
                            <p className="text-xl">PT Bank Rakyat Indonesia (Persero) Tbk</p>
                        </div>
                        <p className="text-xl">July 2024 - August 2024</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-degular font-medium">Lead of Community</h4>
                            <p className="text-xl">Google Developer Student Clubs Maliki</p>
                        </div>
                        <p className="text-xl">August 2023 - July 2024</p>
                    </div>
                </div>
                <hr className="border-black my-16" />
                <h2 className="font-degular text-4xl font-medium mb-12">Tech Stack</h2>
                <div className="flex gap-8">
                    <FaHtml5 className="w-12 h-12 transition hover:scale-110" />
                    <FaCss3Alt className="w-12 h-12 transition hover:scale-110" />
                    <FaJs className="w-12 h-12 transition hover:scale-110" />
                    <FaPhp className="w-12 h-12 transition hover:scale-110" />
                    <FaBootstrap className="w-12 h-12 transition hover:scale-110" />
                    <RiTailwindCssFill className="w-12 h-12 transition hover:scale-110" />
                    <FaReact className="w-12 h-12 transition hover:scale-110" />
                    <SiNextdotjs className="w-12 h-12 transition hover:scale-110" />
                    <FaLaravel className="w-12 h-12 transition hover:scale-110" />
                    <RiFlutterFill className="w-12 h-12 transition hover:scale-110" />
                    <FaFigma className="w-12 h-12 transition hover:scale-110" />
                </div>
            </section>
        </main>
    );
}
