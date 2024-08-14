import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const ProjectList: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="xl:ml-24 md:ml-20 flex md:flex-row flex-col-reverse gap-8 justify-center items-center">
            <div className="basis-2/5 md:text-left text-center">
                <h2 className="font-degular xl:text-5xl md:text-4xl text-3xl font-semibold">{title}</h2>
                <hr className="md:border-black border-transparent w-1/3 xl:my-10 md:my-5 my-2" />
                <p className="xl:mb-8 md:mb-4 mb-2 opacity-70 md:leading-relaxed">{description}</p>
                <div className="flex gap-1 items-center md:justify-start justify-center">
                    <Link href={link} className="font-degular font-semibold md:text-xl text-lg hover:bg-black hover:text-white transition">
                        View Project
                    </Link>
                    <RiArrowRightUpLine />
                </div>
            </div>
            <Link href={link} className="basis-3/5">
                <Image src={image} alt="Project" width={1200} height={1200} className="grayscale hover:grayscale-0"></Image>
            </Link>
        </div>
    );
};
