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
        <section className="container h-full flex flex-col justify-center border-b-2 border-black">
            <div className="flex gap-4 text-xl border-b border-black pb-4">
                <h6>Based in Malang, Indonesia</h6>
                <HiOutlineArrowLongRight />
                <h6 className="font-bold">{currentTime}</h6>
            </div>
            <h1 className="text-8xl font-degular font-medium mt-12 mb-28">Hi, this is Alif.</h1>
            <ul className="space-y-2">
                <li className="flex gap-4 text-xl">
                    <h6>Currently</h6>
                    <HiOutlineArrowLongRight />
                    <h6 className="font-bold">
                        Frontend Web Developer @{' '}
                        <span className="py-1 hover:bg-black hover:text-white transition">
                            <Link href={'https://www.linkedin.com/company/ekata-tech/mycompany/'}>Ekata</Link>
                        </span>
                    </h6>
                </li>
                <li className="flex gap-4 text-xl">
                    <h6>Passionate</h6>
                    <HiOutlineArrowLongRight />
                    <h6 className="font-bold">Developing Cutting-edge Interfaces</h6>
                </li>
                <li className="flex gap-4 text-xl">
                    <h6>Delivering</h6>
                    <HiOutlineArrowLongRight />
                    <h6 className="font-bold">Smiles ☻</h6>
                </li>
            </ul>
        </section>
    );
}
