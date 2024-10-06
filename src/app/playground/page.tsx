'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Playground() {
    return (
        <main>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className="bg-pattern">
                <div className="border-b-2 border-black bg-gradient-to-b from-quaternary to-transparent">
                    <div className="container pt-16 pb-8 space-y-2 text-black">
                        <h1 className="font-degular md:text-6xl text-5xl font-medium">Playground</h1>
                        <p className="md:text-xl">Here are some explorations that I like. Click on the list below to see more details.</p>
                    </div>
                </div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.5,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="show"
                    className="container gap-6 my-16"
                >
                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bg-black shadow-lg">
                        <Link
                            href={'/playground/gemini'}
                            className="flex justify-between items-center border-2 border-black bg-white overflow-hidden transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
                        >
                            <div className="h-full px-5 py-3">
                                <h3 className="font-degular md:text-3xl text-2xl font-semibold text-gemini">AI Chatbot with Gemini</h3>
                                <p className="mt-2 md:text-lg text-base">Simple generative AI app with the Gemini API</p>
                            </div>
                            <div className="p-5 border-l-2 border-black">
                                <Image
                                    src="/assets/img/gemini-ai.png"
                                    alt="AI Chatbot with Gemini"
                                    width={1000}
                                    height={1000}
                                    className="w-full md:h-20 h-12 object-cover"
                                />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>
        </main>
    );
}
