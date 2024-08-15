import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function DetailProject() {
    return (
        <main>
            <section>
                <div className="border-b-2 border-black bg-gradient-to-b from-[#357B24] to-transparent">
                    <div className="container md:h-screen flex flex-col justify-center">
                        <h1 className="md:text-8xl text-7xl text-white font-degular font-medium md:mb-28 mb-16">Ecocycle</h1>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Platform</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">Mobile App</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Client</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">Personal Project</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Timeline</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">Mar 2023 - Aug 2023</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container py-24 border-b-2 border-black">
                    <div className="w-4/5">
                        <h2 className="text-4xl font-degular text-white bg-[#357B24] inline leading-relaxed">
                            A mobile app that uses camera detection to identify waste and provides recycling tutorials.
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <h6 className="mt-16 mb-6 text-2xl font-degular font-semibold">Description App</h6>
                        <p>
                            Ecocycle is a mobile application designed to address the global issue of waste management. By leveraging camera detection
                            technology, the app allows users to identify different types of waste and provides step-by-step tutorials on how to
                            recycle them properly.
                            <br />
                            <br />
                            The app aims to enhance user awareness and engagement in recycling processes, offering an intuitive and user-friendly
                            solution that helps users make a positive environmental impact.
                        </p>
                    </div>
                </div>
                <div className="container h-96 bg-project bg-cover bg-center border-b-2 border-black"></div>
                <div className="container py-24 border-b-2 border-black">
                    <div className="grid grid-cols-3 gap-y-24 mb-12">
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">01</h6>
                            <h6>Background & Problem</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="mb-8">
                                Waste management and environmental sustainability are pressing global issues. Many people lack the awareness or
                                knowledge of how to recycle waste correctly.
                                <br />
                                <br />
                                The lack of understanding and easily accessible tools for recycling waste has led to poor waste management, which
                                negatively impacts the environment.
                                <br />
                                <br />
                                People are often confused about which types of waste can be recycled and how to recycle them properly.
                            </p>
                            <div className="flex gap-4">
                                <Image
                                    src={'/assets/img/project.png'}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-52 object-cover bg-[#357B24]"
                                />
                                <Image
                                    src={'/assets/img/project.png'}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-52 object-cover bg-[#357B24]"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">02</h6>
                            <h6>Solution Overview</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="mb-8">
                                To increase public awareness and participation in recycling processes through an app that simplifies waste
                                identification and provides step-by-step guidance.
                                <br />
                                <br />
                                The Ecocycle app uses camera technology to detect different types of waste. Once detected, the app offers detailed
                                tutorials on how to recycle that waste.
                                <br />
                                <br />
                                The integration of image recognition technology for waste detection and in-app tutorial provision makes Ecocycle stand
                                out from other recycling apps.
                            </p>
                            <div className="flex gap-4">
                                <Image
                                    src={'/assets/img/project.png'}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-52 object-cover bg-[#357B24]"
                                />
                                <Image
                                    src={'/assets/img/project.png'}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-52 object-cover bg-[#357B24]"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">03</h6>
                            <h6>Key Feature</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="">
                                My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest
                                tech and design updates.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4">
                        <div className="row-start-1 col-start-1 flex items-center gap-4">
                            <Image src={'/assets/img/project.png'} alt={'Project'} width={1000} height={1000} className="w-full h-52 object-cover" />
                            <div className="space-y-2">
                                <h6 className="font-bold">Waste Detection with Camera</h6>
                                <p>Users can scan waste with their phone camera, and the app will detect the type of waste.</p>
                            </div>
                        </div>
                        <div className="row-start-2 col-start-2 flex items-center gap-4">
                            <div className="space-y-2 text-right">
                                <h6 className="font-bold">Waste Detection with Camera2</h6>
                                <p>Users can scan waste with their phone camera, and the app will detect the type of waste.</p>
                            </div>
                            <Image src={'/assets/img/project.png'} alt={'Project'} width={1000} height={1000} className="w-full h-52 object-cover" />
                        </div>
                        <div className="row-start-3 col-start-1 flex items-center gap-4">
                            <Image src={'/assets/img/project.png'} alt={'Project'} width={1000} height={1000} className="w-full h-52 object-cover" />
                            <div className="space-y-2">
                                <h6 className="font-bold">Waste Detection with Camera3</h6>
                                <p>Users can scan waste with their phone camera, and the app will detect the type of waste.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-24 border-b-2 border-black">
                    <h2 className="text-4xl font-degular text-white bg-[#357B24] inline leading-relaxed">Technology Stack</h2>
                    <div>
                        <ul className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
                            <li className="flex items-center gap-4 md:text-xl">
                                <h6>Frontend</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">React Native</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl">
                                <h6>Backend</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">Node.js</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl">
                                <h6>Database</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">MongoDB</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl">
                                <h6>Cloud</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">AWS</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer>
                <div className="flex justify-between py-6 container ">
                    <div className="flex items-center gap-4">
                        <HiOutlineArrowLongLeft className="text-3xl" />
                        <Link href={'/'} className="font-degular sm:text-3xl text-xl font-medium hover:bg-black hover:text-white transition">
                            Project 1
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={'/'} className="font-degular sm:text-3xl text-xl font-medium hover:bg-black hover:text-white transition">
                            Project 3
                        </Link>
                        <HiOutlineArrowLongRight className="text-3xl" />
                    </div>
                </div>
            </footer>
        </main>
    );
}
