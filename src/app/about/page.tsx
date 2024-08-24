'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { RiFlutterFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';

export default function About() {
    const cursorSize = 448;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 30, stiffness: 50 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    useEffect(() => {
        mouse.x.set(window.innerWidth - cursorSize);
        mouse.y.set(window.innerHeight / 2 - cursorSize / 2);

        const manageMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        };

        window.addEventListener('mousemove', manageMouseMove);
        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, [mouse.x, mouse.y]);

    return (
        <main className="bg-secondary">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative bg-pattern container md:py-24 py-12"
            >
                <motion.div
                    style={{
                        left: smoothMouse.x,
                        top: smoothMouse.y,
                    }}
                    className="fixed w-[32rem] h-[32rem] bg-primary shadow-white shadow-2xl blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
                ></motion.div>
                <div className="relative z-10">
                    <h1 className="font-degular md:text-6xl text-5xl font-medium md:mb-12 mb-8">Hello, I am Muchammad Alif Zaidan</h1>
                    <div className="md:text-xl md:space-y-8 space-y-4">
                        <p>A frontend developer pursuing a passion for creating engaging and innovative web experiences ☻</p>
                        <p>
                            Currently studying in the 7th semester at Informatics Engineering UIN Maulana Malik Ibrahim Malang. I’m also working as a
                            freelancer at Ekata and actively involved in the community as a former lead of Google Developer Student Club.
                        </p>
                        <p>
                            My adventure in technology began during my time in college, and I&apos;m always eager to connect and share experiences.
                            Feel free to reach out via contact page and my social media.
                        </p>
                    </div>
                </div>
                <hr className="border-black md:my-16 my-10 relative z-10" />
                <h2 className="font-degular md:text-4xl text-3xl font-medium md:mb-12 mb-8 relative z-10">Work and Community Experience</h2>
                <div className="md:space-y-8 space-y-6 relative z-10">
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
                <hr className="border-black md:my-16 my-10 relative z-10" />
                <h2 className="font-degular text-4xl font-medium mb-12 relative z-10">Tech Stack</h2>
                <div className="grid lg:grid-cols-8 sm:grid-cols-6 grid-cols-4 gap-y-12 relative z-10">
                    <FaHtml5 className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaCss3Alt className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaJs className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaPhp className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaBootstrap className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <RiTailwindCssFill className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaReact className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <SiNextdotjs className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaLaravel className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <RiFlutterFill className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                    <FaFigma className="w-12 h-12 transition duration-200 md:hover:scale-110" />
                </div>
            </motion.section>
        </main>
    );
}
