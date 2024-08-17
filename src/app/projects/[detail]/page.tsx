'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProject(props: any) {
    const { params } = props;
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?id=${params.detail}`, fetcher);

    const project = {
        data: data?.data || [],
    };

    return (
        <main key={project.data?.id}>
            <section>
                <div className="border-b-2 border-black bg-gradient-to-b from-[#357B24] to-transparent">
                    <div className="container md:h-screen flex flex-col justify-center">
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
                <div className="container py-24 border-b-2 border-black">
                    <div className="w-4/5">
                        <h2 className="text-4xl font-degular text-white bg-[#357B24] inline leading-relaxed">{project.data?.shortDescription}</h2>
                    </div>
                    <div className="w-2/3">
                        <h6 className="mt-16 mb-6 text-2xl font-degular font-semibold">Description App</h6>
                        {project.data?.longDescription ? (
                            project.data.longDescription.split('\n').map((paragraph: any, index: any) => (
                                <p key={index}>
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
                <div className="container h-96 bg-project bg-cover bg-center border-b-2 border-black"></div>
                <div className="container py-24 border-b-2 border-black">
                    <div className="grid grid-cols-3 gap-y-24 mb-12">
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">01</h6>
                            <h6>Background & Problem</h6>
                        </div>
                        <div className="col-span-2">
                            <div className="mb-8">
                                {project.data?.problem?.description ? (
                                    project.data.problem?.description.split('\n').map((paragraph: any, index: any) => (
                                        <p key={index}>
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
                            <div className="flex gap-5">
                                <Image
                                    src={project.data?.problem?.firstImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-72 object-cover"
                                />
                                <Image
                                    src={project.data?.problem?.secondImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-72 object-cover"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">02</h6>
                            <h6>Solution Overview</h6>
                        </div>
                        <div className="col-span-2">
                            <div className="mb-8">
                                {project.data?.solution?.description ? (
                                    project.data.solution?.description.split('\n').map((paragraph: any, index: any) => (
                                        <p key={index}>
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
                            <div className="flex gap-5">
                                <Image
                                    src={project.data?.solution?.firstImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-72 object-cover"
                                />
                                <Image
                                    src={project.data?.solution?.secondImage}
                                    alt={'Project'}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-72 object-cover"
                                />
                            </div>
                        </div>
                        <div className="font-degular font-semibold text-2xl flex gap-12">
                            <h6 className="text-[#357B24]">03</h6>
                            <h6>Key Feature</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="">{project.data?.keyFeature?.description}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4">
                        {project.data?.keyFeature?.features?.map((feature: any, index: any) => (
                            <div key={index} className={`row-start-${index + 1} col-start-${index % 2 === 0 ? 1 : 2} flex items-center gap-4`}>
                                {index % 2 === 0 && (
                                    <Image src={feature.image} alt={feature.title} width={1000} height={1000} className="w-full h-52 object-cover" />
                                )}
                                <div className={`space-y-2 ${index % 2 === 0 ? '' : 'text-right'}`}>
                                    <h6 className="font-bold">{feature.title}</h6>
                                    <p>{feature.description}</p>
                                </div>
                                {index % 2 !== 0 && (
                                    <Image src={feature.image} alt={feature.title} width={1000} height={1000} className="w-full h-52 object-cover" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container py-24 border-b-2 border-black">
                    <h2 className="text-4xl font-degular text-white bg-[#357B24] inline leading-relaxed">Technology Stack</h2>
                    <div>
                        <ul className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
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
                                {project.data?.techStack?.api?.length > 0 && <h6 className="font-bold">{project.data.techStack.api.join(', ')}</h6>}
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
