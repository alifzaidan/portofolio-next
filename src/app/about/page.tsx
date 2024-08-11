import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { RiFlutterFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';

export default function About() {
    return (
        <main className="bg-secondary">
            <section className="container md:py-24 py-12">
                <h1 className="font-degular md:text-6xl text-5xl font-medium md:mb-12 mb-8">Hello, I am Muchammad Alif Zaidan</h1>
                <div className="md:text-xl md:space-y-8 space-y-4">
                    <p>A frontend developer pursuing a passion for creating engaging and innovative web experiences ☻</p>
                    <p>
                        Currently studying in the 7th semester at Informatics Engineering UIN Maulana Malik Ibrahim Malang. I’m also working as a
                        freelancer at Ekata and actively involved in the community as a former lead of Google Developer Student Club.
                    </p>
                    <p>
                        My adventure in technology began during my time in college, and I&apos;m always eager to connect and share experiences. Feel
                        free to reach out via the links below.
                    </p>
                </div>
                <hr className="border-black md:my-16 my-10" />
                <h2 className="font-degular md:text-4xl text-3xl font-medium md:mb-12 mb-8">Work and Community Experience</h2>
                <div className="md:space-y-8 space-y-6">
                    <div className="md:flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="md:text-3xl text-2xl font-degular font-medium">Freelance as Web Developer</h4>
                            <p className="md:text-xl">PT. Ekata Technology Indonesia</p>
                        </div>
                        <p className="md:text-xl">June 2023 - Present</p>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="md:text-3xl text-2xl font-degular font-medium">Internship as Information Technology Engineer</h4>
                            <p className="md:text-xl">PT Bank Rakyat Indonesia (Persero) Tbk</p>
                        </div>
                        <p className="md:text-xl">July 2024 - August 2024</p>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className="space-y-2">
                            <h4 className="md:text-3xl text-2xl font-degular font-medium">Lead of Community</h4>
                            <p className="md:text-xl">Google Developer Student Clubs Maliki</p>
                        </div>
                        <p className="md:text-xl">August 2023 - July 2024</p>
                    </div>
                </div>
                <hr className="border-black md:my-16 my-10" />
                <h2 className="font-degular text-4xl font-medium mb-12">Tech Stack</h2>
                <div className="grid lg:grid-cols-8 sm:grid-cols-6 grid-cols-4 gap-y-12">
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
