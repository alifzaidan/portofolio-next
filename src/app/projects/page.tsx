'use client';

import { ProjectCard } from '@/components/ui/ProjectCard';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, fetcher);

    const projects = {
        data: data?.data || [],
    };

    return (
        <main>
            <section>
                <div className="border-b-2 border-tertiary bg-gradient-to-b from-tertiary to-transparent">
                    <div className="container pt-16 pb-8 space-y-2 text-white">
                        <h1 className="font-degular md:text-6xl text-5xl font-medium">My Projects</h1>
                        <p className="md:text-xl">Here are some of the projects I&apos;ve worked on. Click on the project to view more details</p>
                    </div>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                    {projects.data?.length > 0 &&
                        projects.data
                            .slice()
                            .reverse()
                            .map((project: any) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    platform={project.platform}
                                    description={project.tagline}
                                    image={project.image}
                                    link={`/projects/${project.id}`}
                                />
                            ))}
                </div>
            </section>
        </main>
    );
}
