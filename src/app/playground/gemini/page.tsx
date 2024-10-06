'use client';

import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Base64 from 'base64-js';
import MarkdownIt from 'markdown-it';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

export default function Gemini() {
    const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('Hello, I am Gemini AI chatbot. Please enter your instructions.');
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [chatHistory, setChatHistory] = useState<any[]>([]);

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        safetySettings: [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
        ],
    });

    const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const handleImageUpload = (ev: any) => {
        setImage(ev.target.files[0]);
    };

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        setIsLoading(true);
        setOutput('Generating...');
        setPrompt('');

        try {
            let imageBase64 = '';
            if (image) {
                imageBase64 = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(Base64.fromByteArray(new Uint8Array(reader.result as ArrayBuffer)));
                    reader.onerror = reject;
                    reader.readAsArrayBuffer(image);
                });
            }

            const contents = image ? [{ inlineData: { mimeType: image.type, data: imageBase64 } }, { text: prompt }] : [{ text: prompt }];

            const result = await chat.sendMessageStream(contents);

            let buffer = [];
            let md = new MarkdownIt();
            for await (let response of result.stream) {
                buffer.push(response.text());
                const outputText = md.render(buffer.join(''));
                setOutput(outputText);
            }

            const newHistory = [
                ...chatHistory,
                {
                    role: 'user',
                    parts: [{ text: prompt }],
                },
                {
                    role: 'model',
                    parts: [{ text: buffer.join('') }],
                },
            ];

            // Update chatHistory dengan format baru
            setChatHistory(newHistory);
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
                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <span className="text-gray-400 text-sm">{image ? image.name : 'No image selected'}</span>
                            <div className="flex gap-4">
                                <div className="grow relative w-full">
                                    <input
                                        name="prompt"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Enter instructions here"
                                        type="text"
                                        autoComplete="off"
                                        className="absolute w-full py-2 px-4 border-2 border-black bg-white shadow-lg z-10 placeholder-opacity-100 transition-transform duration-300 focus:-translate-x-1 focus:-translate-y-1 focus:placeholder-opacity-0 outline-none"
                                    ></input>
                                    <div className="absolute w-full h-full bg-black"></div>
                                </div>
                                <div className="bg-black flex-none">
                                    <div className="flex justify-between items-center">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            style={{ display: 'none' }}
                                            id="file-upload"
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="border-2 border-black cursor-pointer bg-white px-3 py-2 shadow-lg transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
                                        >
                                            <TbPhotoPlus size={24} />
                                        </label>
                                    </div>
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
