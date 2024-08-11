import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Footer() {
    return (
        <footer className="flex justify-between py-6 container border-t-2 border-black">
            <div className="grid grid-cols-3 gap-1 w-full">
                <div className="flex items-center">
                    <HiOutlineArrowLongRight />
                    <Link
                        href={'mailto:muchammadalifzaidan@gmail.com'}
                        className="font-degular text-xl font-medium hover:bg-black hover:text-white transition"
                    >
                        Email
                    </Link>
                </div>
                <div className="flex items-center">
                    <HiOutlineArrowLongRight />
                    <Link href={'/'} className="font-degular text-xl font-medium hover:bg-black hover:text-white transition">
                        Resume
                    </Link>
                </div>
                <div className="flex items-center">
                    <HiOutlineArrowLongRight />
                    <Link
                        href={'https://www.linkedin.com/in/alifzaidan/'}
                        className="font-degular text-xl font-medium hover:bg-black hover:text-white transition"
                    >
                        Linkedin
                    </Link>
                </div>
                <div className="flex items-center">
                    <HiOutlineArrowLongRight />
                    <Link
                        href={'https://instagram.com/zaidanaliff_/'}
                        className="font-degular text-xl font-medium hover:bg-black hover:text-white transition"
                    >
                        Instagram
                    </Link>
                </div>
                <div className="flex items-center">
                    <HiOutlineArrowLongRight />
                    <Link
                        href={'https://github.com/alifzaidan'}
                        className="font-degular text-xl font-medium hover:bg-black hover:text-white transition"
                    >
                        Github
                    </Link>
                </div>
            </div>
            <div className="w-full text-right grid grid-cols-1 gap-1">
                <p className="font-degular text-xl font-medium">Updated 10/24</p>
                <p className="font-degular text-xl font-medium">Muchammad Alif Zaidan</p>
            </div>
        </footer>
    );
}
