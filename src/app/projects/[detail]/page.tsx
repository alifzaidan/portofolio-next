'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight, HiOutlineArrowLongUp } from 'react-icons/hi2';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProject(props: any) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { params } = props;
    const { data: projectData, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?id=${params.detail}`, fetcher);
    const { data: allProjectsData } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, fetcher);

    const project = {
        data: projectData?.data || [],
    };

    const allProject = {
        data: allProjectsData?.data || [],
    };

    const totalProjects = allProjectsData?.data?.length || 0;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="text-white">Loading</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <h1 className="text-white">Failed to load data</h1>
            </div>
        );
    }

    return (
        <main key={project.data?.id}>
            <section className="border-b-2 border-black bg-pattern">
                <div className="border-b-2 border-black" style={{ background: `linear-gradient(to bottom, ${project.data?.color}, transparent)` }}>
                    <div className="container md:h-screen py-20 flex flex-col justify-center">
                        <h1 className="md:text-8xl text-7xl text-white font-degular font-medium md:mb-28 mb-16">{project.data?.title}</h1>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Platform</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">{project.data?.platform}</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Client</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">{project.data?.client}</h6>
                            </li>
                            <li className="flex items-center gap-4 md:text-xl text-white">
                                <h6>Timeline</h6>
                                <HiOutlineArrowLongRight />
                                <h6 className="font-bold">{project.data?.timeline}</h6>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container md:py-24 py-16">
                    <div className="md:w-4/5">
                        <h2 className="md:text-4xl text-2xl font-degular text-white inline" style={{ backgroundColor: project.data?.color }}>
                            {project.data?.shortDescription}
                        </h2>
                    </div>
                    <div className="md:w-2/3">
                        <h6 className="md:mt-16 mt-10 md:mb-6 mb-4 text-2xl font-degular font-semibold">Description App</h6>
                        {project.data?.longDescription ? (
                            project.data.longDescription.split('\n').map((paragraph: any, index: any) => (
                                <p key={index} className="text-justify">
                                    {paragraph}
                                    {index < project.data.longDescription.split('\n').length - 1 && (
                                        <>
                                            <br />
                                            <br />
                                        </>
                                    )}
                                </p>
                            ))
                        ) : (
                            <p>No description available.</p>
                        )}
                    </div>
                </div>

                <div className="h-96 bg-project bg-cover bg-center border-y-2 border-black"></div>

                <div className="container md:py-24 py-12">
                    <div className="grid lg:grid-cols-3 lg:gap-y-24 md:gap-y-10 gap-y-5 mb-12">
                        <div className="font-degular font-semibold text-2xl flex md:gap-12 gap-6">
                            <h6 style={{ color: project.data?.color }}>01</h6>
                            <h6>Background & Problem</h6>
                        </div>
                        <div className="col-span-2 lg:mb-0 mb-8">
                            <div className="mb-8">
                                {project.data?.problem?.description ? (
                                    project.data.problem?.description.split('\n').map((paragraph: any, index: any) => (
                                        <p key={index} className="text-justify">
                                            {paragraph}
                                            {index < project.data.problem?.description.split('\n').length - 1 && (
                                                <>
                                                    <br />
                                                    <br />
                                                </>
                                            )}
                                        </p>
                                    ))
                                ) : (
                                    <p>No description available.</p>
                                )}
                            </div>
                            <div className="flex md:flex-row flex-col gap-5">
                                <Image
                                    src={project.data?.problem?.firstImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="md:h-72 h-52 md:w-1/2 object-cover"
                                />
                                <Image
                                    src={project.data?.problem?.secondImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="md:h-72 h-52 md:w-1/2 object-cover"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex md:gap-12 gap-6">
                            <h6 style={{ color: project.data?.color }}>02</h6>
                            <h6>Solution Overview</h6>
                        </div>
                        <div className="col-span-2 lg:mb-0 mb-8">
                            <div className="mb-8">
                                {project.data?.solution?.description ? (
                                    project.data.solution?.description.split('\n').map((paragraph: any, index: any) => (
                                        <p key={index} className="text-justify">
                                            {paragraph}
                                            {index < project.data.solution?.description.split('\n').length - 1 && (
                                                <>
                                                    <br />
                                                    <br />
                                                </>
                                            )}
                                        </p>
                                    ))
                                ) : (
                                    <p>No description available.</p>
                                )}
                            </div>
                            <div className="flex md:flex-row flex-col gap-5">
                                <Image
                                    src={project.data?.solution?.firstImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="md:h-72 h-52 md:w-1/2 object-contain object-top"
                                />
                                <Image
                                    src={project.data?.solution?.secondImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="md:h-72 h-52 md:w-1/2 object-contain object-top"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 style={{ color: project.data?.color }}>03</h6>
                            <h6>Key Feature</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="">{project.data?.keyFeature?.description}</p>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-y-4 gap-y-6">
                        {project.data?.keyFeature?.features?.map((feature: any, index: any) => (
                            <>
                                <div
                                    key={index}
                                    className={`flex ${
                                        index % 2 === 0 ? 'md:flex-row xl:col-start-1' : 'xl:flex-row-reverse md:flex-row xl:col-start-2'
                                    } items-center flex-col-reverse gap-4`}
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={1000}
                                        height={1000}
                                        className={`w-full h-52 object-contain ${
                                            project.data?.platform === 'Website' ? 'md:basis-1/2' : 'md:basis-1/3'
                                        }`}
                                    />

                                    <div
                                        className={`${
                                            project.data?.platform === 'Website' ? 'md:basis-1/2' : 'md:basis-2/3'
                                        } md:space-y-2 text-center ${index % 2 === 0 ? 'xl:text-left' : 'xl:text-right'}`}
                                    >
                                        <h6 className="font-bold">{feature.title}</h6>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                                <div></div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="border-t-2 border-black">
                    <div className="container md:py-24 py-12">
                        <h2 className="md:text-4xl text-2xl font-degular text-white inline" style={{ backgroundColor: project.data?.color }}>
                            Technology Stack
                        </h2>
                        <div>
                            <ul className="md:mt-12 mt-6 grid md:grid-cols-2 grid-cols-1 gap-4">
                                <li className="flex items-center gap-4 md:text-xl">
                                    <h6>Frontend</h6>
                                    <HiOutlineArrowLongRight />
                                    {project.data?.techStack?.frontend?.length > 0 && (
                                        <h6 className="font-bold">{project.data.techStack.frontend.join(', ')}</h6>
                                    )}
                                </li>
                                <li className="flex items-center gap-4 md:text-xl">
                                    <h6>Backend</h6>
                                    <HiOutlineArrowLongRight />
                                    {project.data?.techStack?.backend?.length > 0 && (
                                        <h6 className="font-bold">{project.data.techStack.backend.join(', ')}</h6>
                                    )}
                                </li>
                                <li className="flex items-center gap-4 md:text-xl">
                                    <h6>API</h6>
                                    <HiOutlineArrowLongRight />
                                    {project.data?.techStack?.api?.length > 0 && (
                                        <h6 className="font-bold">{project.data.techStack.api.join(', ')}</h6>
                                    )}
                                </li>
                                <li className="flex items-center gap-4 md:text-xl">
                                    <h6>Additional</h6>
                                    <HiOutlineArrowLongRight />
                                    {project.data?.techStack?.additional?.length > 0 && (
                                        <h6 className="font-bold">{project.data.techStack.additional.join(', ')}</h6>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="fixed md:block hidden bottom-16 right-12 p-2 border-2 border-black shadow-lg hover:text-white hover:bg-black hover:border-primary transition duration-200"
                >
                    <HiOutlineArrowLongUp size={32} />
                </button>
            )}

            <footer>
                <div className="flex justify-between py-6 container ">
                    {params.detail < totalProjects ? (
                        <div className="flex items-center gap-4">
                            <HiOutlineArrowLongLeft className="text-3xl" />
                            <Link
                                href={`/projects/${project.data?.id + 1}`}
                                className="font-degular sm:text-3xl text-xl font-medium hover:bg-black hover:text-white transition"
                            >
                                {allProject.data?.[project.data?.id]?.title}
                            </Link>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {params.detail > 1 ? (
                        <div className="flex items-center gap-4">
                            <Link
                                href={`/projects/${project.data?.id - 1}`}
                                className="font-degular sm:text-3xl text-xl font-medium hover:bg-black hover:text-white transition"
                            >
                                {allProject.data?.[project.data?.id - 2]?.title}
                            </Link>
                            <HiOutlineArrowLongRight className="text-3xl" />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </footer>
        </main>
    );
}
