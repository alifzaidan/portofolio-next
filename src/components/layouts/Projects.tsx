import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

export default function Projects() {
    return (
        <section id="projects">
            <h1 className="sticky flex gap-1 font-degular text-7xl font-medium top-12 left-0 m-12 text-v select-none opacity-10 -z-10">
                Latest Projects
                <RiArrowRightUpLine className="rotate-90" />
            </h1>
            <div className="space-y-36 -mt-80 mb-24">
                <div className="ml-72 mr-24 flex gap-8 justify-center items-center">
                    <div className="basis-1/3">
                        <h2 className="font-degular text-5xl font-semibold">NASA spacewalk execution system</h2>
                        <hr className="border-black w-1/3 my-10" />
                        <p className="mb-8 opacity-70 leading-relaxed tracking-wide">
                            Helping NASA Mission Control personnel navigate and communicate Artemis mission alterations in uncharted lunar regions
                        </p>
                        <div className="flex gap-1 items-center">
                            <Link href={'/'} className="font-degular font-semibold text-xl hover:bg-black hover:text-white transition">
                                View Project
                            </Link>
                            <RiArrowRightUpLine />
                        </div>
                    </div>
                    <div className="basis-2/3">
                        <Image src={'/assets/img/project.png'} alt="Project" width={1200} height={1200}></Image>
                    </div>
                </div>
                <div className="ml-72 mr-24 flex gap-8 justify-center items-center">
                    <div className="basis-1/3">
                        <h2 className="font-degular text-5xl font-semibold">NASA spacewalk execution system</h2>
                        <hr className="border-black w-1/3 my-10" />
                        <p className="mb-8 opacity-70 leading-relaxed tracking-wide">
                            Helping NASA Mission Control personnel navigate and communicate Artemis mission alterations in uncharted lunar regions
                        </p>
                        <div className="flex gap-1 items-center">
                            <Link href={'/'} className="font-degular font-semibold text-xl hover:bg-black hover:text-white transition">
                                View Project
                            </Link>
                            <RiArrowRightUpLine />
                        </div>
                    </div>
                    <Link href={'/'} className="basis-2/3">
                        <Image
                            src={'/assets/img/project.png'}
                            alt="Project"
                            width={1200}
                            height={1200}
                            className="grayscale hover:grayscale-0"
                        ></Image>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mb-24">
                <Link
                    href={'/projects'}
                    className="flex w-fit items-center gap-1 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition"
                >
                    <p className="font-degular font-semibold text-xl">View All Project</p>
                    <RiArrowRightUpLine className="animate-bounce" />
                </Link>
            </div>
        </section>
    );
}
