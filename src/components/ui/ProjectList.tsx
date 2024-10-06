import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { motion, useAnimation, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    platform: string;
    image: string;
    link: string;
}

export const ProjectList: React.FC<ProjectCardProps> = ({ title, description, platform, image, link }) => {
    const controls = useAnimation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { scrollY } = useScroll();
    const [hovered, setHovered] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    const scale = useTransform(scrollY, [0, 2000], [1, 0.8]);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const cursorSize = 120;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { damping: 80, stiffness: 1000 });
    const smoothY = useSpring(mouseY, { damping: 80, stiffness: 1000 });

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            if (hovered && linkRef.current) {
                const rect = linkRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left - cursorSize / 2;
                const y = e.clientY - rect.top - cursorSize / 2;
                mouseX.set(x);
                mouseY.set(y);
            }
        };

        window.addEventListener('mousemove', manageMouseMove);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, [hovered, mouseX, mouseY]);

    return (
        <div className="xl:ml-24 md:ml-20 flex md:flex-row flex-col-reverse gap-x-12 gap-y-6 justify-center items-center">
            <div className="basis-2/5 md:text-left text-center">
                <h2 className="font-degular xl:text-5xl md:text-4xl text-3xl font-semibold">{title}</h2>
                <hr className="md:border-black border-transparent w-1/3 xl:my-8 md:my-5 my-2" />
                <p className="xl:mb-6 md:mb-4 mb-2 opacity-70 md:leading-relaxed">{description}</p>
                <div className="flex gap-1 items-center md:justify-start justify-center">
                    <Link href={link} className="font-degular font-semibold md:text-xl text-lg hover:bg-black hover:text-white transition">
                        View Project
                    </Link>
                    <RiArrowRightUpLine />
                </div>
            </div>
            <Link
                href={link}
                className="relative basis-3/5"
                ref={linkRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered && (
                    <motion.div
                        style={{
                            translateX: smoothX,
                            translateY: smoothY,
                            width: cursorSize,
                            height: cursorSize,
                        }}
                        className="absolute pointer-events-none z-10"
                    >
                        <RiArrowRightUpLine size={120} />
                    </motion.div>
                )}
                <motion.div initial="hidden" animate={controls} variants={variants} style={{ scale }} ref={motionRef} className="relative z-0">
                    <Image
                        src={image}
                        alt={title}
                        width={1200}
                        height={1200}
                        className={`rounded-xl hover:opacity-95 transition duration-200 ${platform === 'Website' ? '' : 'border-2 border-black'}`}
                    />
                </motion.div>
            </Link>
        </div>
    );
};
