'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HiMiniBars3BottomRight, HiXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const match = pathname.match(/^\/projects\/(\d+)$/);
    const projectId = match ? match[1] : null;
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?id=${projectId}`, fetcher);

    const project = {
        data: data?.data || [],
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpen]);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`border-b-2 border-black ${
                pathname === '/contact'
                    ? 'bg-black text-white'
                    : pathname === '/about'
                    ? 'bg-secondary'
                    : pathname === '/projects'
                    ? 'bg-tertiary text-white border-white'
                    : pathname === '/playground'
                    ? 'bg-quaternary'
                    : pathname === '/playground/gemini'
                    ? 'bg-gemini'
                    : ''
            }`}
            style={{
                backgroundColor: project.data?.id ? project.data?.color : '',
                color: project.data?.id ? 'white' : '',
                borderColor: project.data?.id ? 'white' : '',
            }}
        >
            <nav className="container bg-pattern flex justify-between items-center py-5">
                <div className="flex gap-12 items-center">
                    <Link
                        href={'/'}
                        className="font-degular text-2xl font-semibold hover:bg-black hover:text-white transition"
                        onClick={menuOpen ? toggleMenu : undefined}
                    >
                        AZ
                    </Link>
                    <div className="hidden md:flex gap-6">
                        <Link
                            href={`${pathname === '/' ? '#projects' : '/projects'} `}
                            className={`font-degular font-semibold border-b-2 hover:bg-black hover:text-white transition ${
                                pathname.startsWith('/projects') ? 'border-white' : 'border-transparent'
                            }`}
                        >
                            Project
                        </Link>

                        <Link
                            href={'/playground'}
                            className={`font-degular font-semibold border-b-2 hover:bg-black hover:text-white transition ${
                                pathname.startsWith('/playground') ? 'border-black' : 'border-transparent'
                            }`}
                        >
                            Playground
                        </Link>

                        <Link
                            href={'/about'}
                            className={`font-degular font-semibold border-b-2 hover:bg-black hover:text-white transition ${
                                pathname === '/about' ? 'border-black' : 'border-transparent'
                            }`}
                        >
                            About
                        </Link>

                        <Link
                            href={'/contact'}
                            className={`font-degular font-semibold border-b-2 hover:bg-black hover:text-white transition ${
                                pathname === '/contact' ? 'border-white' : 'border-transparent'
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link href={'https://github.com/alifzaidan'} target="_blank">
                        <FaGithub className="w-4 h-4 hover:opacity-70 transition" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/alifzaidan/'} target="_blank">
                        <FaLinkedinIn className="w-4 h-4 hover:opacity-70 transition" />
                    </Link>
                    <Link href={'https://instagram.com/zaidanaliff_/'} target="_blank">
                        <FaInstagram className="w-4 h-4 hover:opacity-70 transition" />
                    </Link>
                </div>
                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? <HiXMark className="w-6 h-6" /> : <HiMiniBars3BottomRight className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-opacity transform duration-500 fixed top-16 right-0 h-screen w-full z-20 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }  ${
                    pathname === '/contact'
                        ? 'bg-black text-white'
                        : pathname === '/about'
                        ? 'bg-secondary'
                        : pathname === '/projects'
                        ? 'bg-tertiary'
                        : pathname === '/playground'
                        ? 'bg-quaternary'
                        : pathname === '/playground/gemini'
                        ? 'bg-gemini'
                        : 'bg-primary'
                }`}
                style={{
                    backgroundColor: project.data?.id ? project.data?.color : '',
                    color: project.data?.id ? 'white' : '',
                    borderColor: project.data?.id ? 'white' : '',
                }}
            >
                <nav className="flex flex-col items-center justify-evenly gap-6 h-full bg-pattern">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={`${pathname === '/' ? '#projects' : '/projects'} `}
                            className={`text-4xl font-degular font-semibold ${
                                pathname === '/projects' ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                            }`}
                            onClick={toggleMenu}
                        >
                            Project
                        </Link>
                        <Link
                            href={'/playground'}
                            className={`text-4xl font-degular font-semibold ${
                                pathname === '/playground' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                            }`}
                            onClick={toggleMenu}
                        >
                            Playground
                        </Link>
                        <Link
                            href={'/about'}
                            className={`text-4xl font-degular font-semibold ${
                                pathname === '/about' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                            }`}
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            href={'/contact'}
                            className={`text-4xl font-degular font-semibold ${
                                pathname === '/contact' ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                            }`}
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex gap-6 justify-center">
                        <Link href={'https://github.com/alifzaidan'} onClick={toggleMenu}>
                            <FaGithub className="w-6 h-6 hover:opacity-70 transition" />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/alifzaidan/'} onClick={toggleMenu}>
                            <FaLinkedinIn className="w-6 h-6 hover:opacity-70 transition" />
                        </Link>
                        <Link href={'https://instagram.com/zaidanaliff_/'} onClick={toggleMenu}>
                            <FaInstagram className="w-6 h-6 hover:opacity-70 transition" />
                        </Link>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
