import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <Link href={link} className="bg-white border-2 border-black overflow-hidden shadow-lg md:hover:scale-95 transition duration-300">
            <div className="m-5">
                <Image src={image} alt={title} width={1000} height={1000} className="w-full h-48 object-cover" />
            </div>
            <div className="border-t-2 border-black px-5 py-3">
                <h3 className="font-degular text-2xl font-medium text-black">{title}</h3>
                <p className="text-black mt-2">{description}</p>
            </div>
        </Link>
    );
};
