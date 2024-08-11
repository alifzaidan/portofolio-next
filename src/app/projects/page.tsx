import { ProjectCard } from '@/components/ui/ProjectCard';

export default function Projects() {
    return (
        <main>
            <section>
                <div className="border-b-2 border-black bg-gradient-to-b from-tertiary to-transparent">
                    <div className="container pt-16 pb-8 space-y-2 text-white">
                        <h1 className="font-degular md:text-6xl text-5xl font-medium">My Projects</h1>
                        <p className="md:text-xl">Here are some of the projects I&apos;ve worked on. Click on the project to view more details</p>
                    </div>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                    <ProjectCard
                        title="Project 1"
                        description="This is a project I worked on"
                        image="/assets/img/project.png"
                        link="/projects/project1"
                    />
                    <ProjectCard
                        title="Project 2"
                        description="This is a project I worked on"
                        image="/assets/img/project.png"
                        link="/projects/project2"
                    />
                    <ProjectCard
                        title="Project 3"
                        description="This is a project I worked on"
                        image="/assets/img/project.png"
                        link="/projects/project3"
                    />
                    <ProjectCard
                        title="Project 3"
                        description="This is a project I worked on"
                        image="/assets/img/project.png"
                        link="/projects/project3"
                    />
                    <ProjectCard
                        title="Project 3"
                        description="This is a project I worked on"
                        image="/assets/img/project.png"
                        link="/projects/project3"
                    />
                </div>
            </section>
        </main>
    );
}
