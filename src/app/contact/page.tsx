'use client';

import { sendEmail } from '@/services/send-email';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { useState } from 'react';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit(data: FormData) {
        sendEmail(data);
        setIsSubmitted(true); // Tampilkan pop-up
        reset(); // Reset form
    }

    function closePopup() {
        setIsSubmitted(false);
    }

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
                    <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 space-y-4">
                        <div className="flex md:flex-row flex-col gap-4">
                            <div className="w-full">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full text-xl px-4 py-2 bg-transparent border-2 border-black focus:outline-none"
                                    {...register('name', { required: true })}
                                    required
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
                                    {...register('email', { required: true })}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                id="message"
                                className="w-full text-xl px-4 py-2 bg-transparent border-2 border-black focus:outline-none"
                                {...register('message', { required: true })}
                                required
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

            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="bg-white p-8 rounded-lg shadow-lg text-center"
                        >
                            <h2 className="font-degular text-3xl font-semibold mb-4">Thank You!</h2>
                            <p className="text-lg">Your message has been sent successfully.</p>
                            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
