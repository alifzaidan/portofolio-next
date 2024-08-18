'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
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
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative bg-pattern border-b-2 border-black"
        >
            <motion.div
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
                className="absolute w-[28rem] h-[28rem] bg-tertiary shadow-white shadow-2xl blur-[120px] hsa rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 -z-10"
            ></motion.div>
            <div className="container md:h-screen md:my-0 my-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 md:text-xl border-b border-black pb-4">
                    <div className="md:flex gap-1">
                        <h6>Based in Malang, </h6>
                        <h6>Indonesia</h6>
                    </div>
                    <HiOutlineArrowLongRight />
                    <h6 className="font-bold">{currentTime}</h6>
                </div>
                <motion.h1
                    className="md:text-8xl text-7xl font-degular font-medium mt-12 md:mb-28 mb-16"
                    initial={{ y: '50%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    Hi, this is Alif.
                </motion.h1>
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
        </motion.section>
    );
}
