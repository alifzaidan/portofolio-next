import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ProjectList } from '../ui/ProjectList';

export default function Projects() {
    return (
        <section id="projects">
            <h1 className="sticky hidden md:flex gap-1 font-degular xl:text-7xl text-6xl font-medium top-12 left-0 m-12 text-v select-none opacity-10 -z-10">
                My Projects
                <RiArrowRightUpLine className="rotate-90" />
            </h1>
            <h1 className="md:hidden text-center mt-16 font-degular text-5xl font-medium underline">My Projects</h1>
            <div className="container md:space-y-36 space-y-20 md:-mt-96 mt-16 mb-16">
                <ProjectList
                    title="NASA spacewalk execution system"
                    description="Helping NASA Mission Control personnel navigate and communicate Artemis mission alterations in uncharted lunar regions"
                    image="/assets/img/project.png"
                    link="/"
                />
                <ProjectList
                    title="Ecocycle"
                    description="Helping people to save earth with recycle garbage"
                    image="/assets/img/project.png"
                    link="/"
                />
            </div>
            <div className="flex justify-center md:mb-24 mb-16">
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
