import { motion } from 'framer-motion';
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
        <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="border-2 border-tertiary bg-white overflow-hidden shadow-lg md:hover:scale-95 transition duration-300"
        >
            <Link href={link}>
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
        </motion.div>
    );
};
