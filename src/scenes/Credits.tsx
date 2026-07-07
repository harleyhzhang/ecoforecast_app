import { useEffect, useRef } from "react";
import { LazyMotion, MotionConfig, domAnimation, m, useAnimation } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import yale from "../assets/Home/logos/yale.webp";
import usgs from "../assets/Home/logos/usgs.webp";
import marshall from "../assets/Home/logos/marshall.webp";
import utah from "../assets/Home/logos/utah-state.webp";
import gee from "../assets/Home/logos/google-earth-engine.webp";
import stepwat2 from "../assets/Home/logos/stepwat2.webp";

interface LogoItem {
    url: string;
    alt: string;
    link: string;
    width: number;
    height: number;
}

const supportLogos: LogoItem[] = [
    {
        url: yale,
        width: 500,
        height: 220,
        alt: "Yale School of the Environment",
        link: "https://environment.yale.edu/",
    },
    {
        url: usgs,
        width: 500,
        height: 135,
        alt: "USGS",
        link: "https://www.usgs.gov/",
    },
    {
        url: marshall,
        width: 500,
        height: 174,
        alt: "Marshall University",
        link: "https://www.marshall.edu/",
    },
    {
        url: utah,
        width: 500,
        height: 194,
        alt: "Utah State University",
        link: "https://www.usu.edu/",
    },
];

const poweredLogos: LogoItem[] = [
    {
        url: gee,
        width: 500,
        height: 160,
        alt: "Google Earth Engine",
        link: "https://earthengine.google.com/",
    },
    {
        url: stepwat2,
        width: 500,
        height: 72,
        alt: "STEPWAT2",
        link: "https://github.com/DrylandEcology/STEPWAT2",
    },
];

const Credits = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sectionRef = ref.current;
        const onScroll = () => {
            if (sectionRef) {
                const topPos = sectionRef.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Check if section is in view
                if (topPos < windowHeight * 0.75) {
                    controls.start("visible");
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [controls]);

    return (
        <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation} strict>
                <div ref={ref} className="mt-20">
                    <div className="sm:mb-10">
                        <h2 className="text-center text-lg sm:text-xl mb-7 text-dark-grey font-product-sans-regular">Made possible by</h2>
                        <m.div
                            className="flex flex-wrap justify-center items-center px-5 md:px-0 pb-6"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
                                hidden: { opacity: 0, y: 20 },
                            }}
                        >
                            {supportLogos.map((logo, index) => (
                                <a
                                    key={logo.link}
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`opacity-80 px-0 sm:px-10 md:px-16 pb-20 sm:py-0 ${isAboveSmallScreens ? "" : "min-w-[50%]"}`}
                                >
                                    <m.img
                                        src={logo.url}
                                        width={logo.width}
                                        height={logo.height}
                                        loading="lazy"
                                        decoding="async"
                                        alt={logo.alt}
                                        className="w-[75px] md:w-[90px] mx-auto"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 * index + 0.2 }}
                                    />
                                </a>
                            ))}
                        </m.div>
                    </div>
                    <div>
                        <h2 className="text-center text-lg sm:text-xl mb-7 text-dark-grey font-product-sans-regular">Powered by</h2>
                        <m.div
                            className="flex flex-wrap justify-center items-center px-5 md:px-0 pb-6"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
                                hidden: { opacity: 0, y: 20 },
                            }}
                        >
                            {poweredLogos.map((logo, index) => (
                                <a
                                    key={logo.link}
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`opacity-80 px-10 md:px-16 pb-20 sm:py-0 ${isAboveSmallScreens ? "" : "min-w-[50%]"}`}
                                >
                                    <m.img
                                        src={logo.url}
                                        width={logo.width}
                                        height={logo.height}
                                        loading="lazy"
                                        decoding="async"
                                        alt={logo.alt}
                                        className="w-20 xs:w-28 sm:w-32 mx-auto"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 * index + 0.2 }}
                                    />
                                </a>
                            ))}
                        </m.div>
                    </div>
                </div>
            </LazyMotion>
        </MotionConfig>
    );
};

export default Credits;
