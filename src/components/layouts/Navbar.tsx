'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="container flex justify-between items-center py-5 border-b-2 border-black">
            <div className="flex gap-12 items-center">
                <Link href={'/'} className="font-degular text-xl font-semibold hover:bg-black hover:text-white transition">
                    AZ
                </Link>
                <div className="flex gap-6">
                    <Link
                        href={'/projects'}
                        className={`font-degular font-semibold hover:bg-black hover:text-white transition ${
                            pathname === '/projects' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                        }`}
                    >
                        Project
                    </Link>

                    <Link
                        href={'/about'}
                        className={`font-degular font-semibold hover:bg-black hover:text-white transition ${
                            pathname === '/about' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                        }`}
                    >
                        About
                    </Link>

                    <Link
                        href={'/contact'}
                        className={`font-degular font-semibold hover:bg-black hover:text-white transition ${
                            pathname === '/contact' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex gap-6">
                <Link href={'https://github.com/alifzaidan'}>
                    <FaGithub className="w-4 hover:opacity-70 transition" />
                </Link>
                <Link href={'https://www.linkedin.com/in/alifzaidan/'}>
                    <FaLinkedinIn className="w-4 hover:opacity-70 transition" />
                </Link>
                <Link href={'https://instagram.com/zaidanaliff_/'}>
                    <FaInstagram className="w-4 hover:opacity-70 transition" />
                </Link>
            </div>
        </nav>
    );
}
