'use client';

import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ProjectList } from '../ui/ProjectList';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, fetcher);

    const projects = {
        data: data?.data.filter((project: any) => project.isTop) || [],
    };

    return (
        <section id="projects">
            <h1 className="sticky hidden md:flex gap-1 font-degular xl:text-7xl text-6xl font-medium top-12 left-0 m-12 text-v select-none opacity-10 -z-10">
                My Projects
                <RiArrowRightUpLine className="rotate-90" />
            </h1>
            <h1 className="md:hidden text-center mt-16 font-degular text-5xl font-medium underline">My Projects</h1>
            <div className="container md:space-y-36 space-y-20 md:-mt-96 mt-16 mb-20">
                {projects.data
                    .slice()
                    .reverse()
                    .map((project: any) => (
                        <ProjectList
                            key={project.id}
                            title={project.title}
                            description={project.shortDescription}
                            platform={project.platform}
                            image={project.image}
                            link={`/projects/${project.id}`}
                        />
                    ))}
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
