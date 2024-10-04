'use client';

import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Base64 from 'base64-js';
import MarkdownIt from 'markdown-it';
import Image from 'next/image';

export default function Gemini() {
    const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('Halo, saya adalah AI chatbot. Silakan masukkan instruksi Anda.');
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = 'AIzaSyC8WIw4YdqnO0GFX7HySWZ4yNTkgn3DDDg';

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        setIsLoading(true);
        setOutput('Generating...');

        try {
            let imageBase64 = await fetch('https://images.unsplash.com/photo-1505993597083-3bd19fb75e57')
                .then((r) => r.arrayBuffer())
                .then((a) => Base64.fromByteArray(new Uint8Array(a)));

            let contents = [
                {
                    role: 'user',
                    parts: [{ inlineData: { mimeType: 'image/jpeg', data: imageBase64 } }, { text: prompt }],
                },
            ];

            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({
                model: 'gemini-1.5-flash', // or gemini-1.5-pro
                safetySettings: [
                    {
                        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
                    },
                ],
            });
            const result = await model.generateContentStream({ contents });

            let buffer = [];
            let md = new MarkdownIt();
            for await (let response of result.stream) {
                buffer.push(response.text());
                const outputText = md.render(buffer.join(''));
                setOutput(outputText);
            }
        } catch (error) {
            console.error('Error generating output:', error);
            setOutput('Error generating output');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className="bg-pattern">
                <div className="border-b-2 border-black bg-gradient-to-b from-gemini to-transparent">
                    <div className="container pt-16 pb-8 space-y-2 text-black">
                        <h1 className="font-degular md:text-6xl text-5xl font-medium">AI Chatbot with Gemini</h1>
                        <p className="md:text-xl">Simple generative AI app with the Gemini API</p>
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
                    className="container gap-6 my-8"
                >
                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bg-black">
                        <div className="border-2 border-black bg-white overflow-hidden shadow-lg px-6 py-8 flex gap-6 -translate-x-1 -translate-y-1">
                            <Image
                                src="/assets/img/gemini-ai.png"
                                alt="AI Chatbot with Gemini"
                                width={1000}
                                height={1000}
                                className="h-10 w-10 object-cover"
                            />
                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: isLoading ? output + '...' : output }} />
                        </div>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-6">
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-4">
                                <div className="grow relative w-full">
                                    <input
                                        name="prompt"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Enter instructions here"
                                        type="text"
                                        className="absolute w-full py-2 px-4 border-2 border-black bg-white shadow-lg z-10 placeholder-opacity-100 transition-transform duration-300 focus:-translate-x-1 focus:-translate-y-1 focus:placeholder-opacity-0 outline-none"
                                    ></input>
                                    <div className="absolute w-full h-full bg-black"></div>
                                </div>
                                <div className="bg-black flex-none">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="h-full w-full px-3 py-2 border-2 border-black bg-white shadow-lg transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
                                    >
                                        {isLoading ? (
                                            <svg className="animate-spin h-5 w-5 mr-3 text-black" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        ) : (
                                            'Generate'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.section>
        </main>
    );
}
