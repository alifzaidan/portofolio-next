'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function MainSection() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const malangTime = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Jakarta',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });
            setCurrentTime(malangTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="border-b-2 border-black">
            <div className="container md:h-screen my-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 md:text-xl border-b border-black pb-4">
                    <div className="md:flex gap-1">
                        <h6>Based in Malang, </h6>
                        <h6>Indonesia</h6>
                    </div>
                    <HiOutlineArrowLongRight />
                    <h6 className="font-bold">{currentTime}</h6>
                </div>
                <h1 className="md:text-8xl text-7xl font-degular font-medium mt-12 md:mb-28 mb-16">Hi, this is Alif.</h1>
                <ul className="space-y-2">
                    <li className="flex items-center gap-4 md:text-xl">
                        <h6>Currently</h6>
                        <HiOutlineArrowLongRight />
                        <h6 className="font-bold">
                            Frontend Web Developer @{' '}
                            <span className="py-1 hover:bg-black hover:text-white transition">
                                <Link href={'https://www.linkedin.com/company/ekata-tech/mycompany/'}>Ekata</Link>
                            </span>
                        </h6>
                    </li>
                    <li className="flex items-center gap-4 md:text-xl">
                        <h6>Passionate</h6>
                        <HiOutlineArrowLongRight />
                        <h6 className="font-bold">Developing Cutting-edge Interfaces</h6>
                    </li>
                    <li className="flex items-center gap-4 md:text-xl">
                        <h6>Delivering</h6>
                        <HiOutlineArrowLongRight />
                        <h6 className="font-bold">Smiles ☻</h6>
                    </li>
                </ul>
            </div>
        </section>
    );
}
