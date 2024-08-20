import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    platform: string;
    image: string;
    link: string;
    color: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, platform, image, link, color }) => {
    return (
        <Link href={link} className="bg-white border-2 border-tertiary overflow-hidden shadow-lg md:hover:scale-95 transition duration-300">
            <div className="m-5">
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={1000}
                    className={`w-full h-48 ${platform === 'Website' ? 'object-contain' : 'object-cover'}`}
                />
            </div>
            <div className="h-full border-t-2 border-tertiary px-5 py-3">
                <h3 className="font-degular text-2xl font-semibold" style={{ color: color }}>
                    {title}
                </h3>
                <p className="mt-2">{description}</p>
            </div>
        </Link>
    );
};
