'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

export default function Contact() {
    return (
        <main>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className="bg-pattern">
                <div className="border-b-2 border-black bg-gradient-to-b from-black to-transparent">
                    <div className="container pt-16 pb-8 space-y-2 text-white">
                        <h1 className="font-degular md:text-6xl text-5xl font-medium">Contact Me</h1>
                        <p className="md:text-xl">
                            Get in touch or shoot me an email directly on{' '}
                            <Link href={'mailto:muchammadalifzaidan@gmail.com'} className="font-bold py-1 hover:bg-black hover:text-white transition">
                                muchammadalifzaidan@gmail.com
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="container py-8">
                    <form className="md:w-2/3 space-y-4">
                        <div className="flex md:flex-row flex-col gap-4">
                            <div className="w-full">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full text-xl px-4 py-2 bg-transparent border-2 border-black focus:outline-none"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block text-lg font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full text-xl px-4 py-2 bg-transparent border-2 border-black focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full text-xl px-4 py-2 bg-transparent border-2 border-black focus:outline-none"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="flex w-fit items-center gap-1 px-4 py-2 border-2 text-white bg-black border-transparent hover:border-black hover:bg-transparent hover:text-black transition"
                        >
                            <p className="font-degular font-semibold text-xl">Send Message</p>
                            <RiArrowRightUpLine />
                        </button>
                    </form>
                </div>
            </motion.section>
        </main>
    );
}
