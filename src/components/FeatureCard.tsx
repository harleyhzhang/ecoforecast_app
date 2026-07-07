import { ReactNode } from "react";
import type { ImageAsset } from "../assets/featureImages";
import useMediaQuery from "../hooks/useMediaQuery";

interface FeatureCardProps {
    title: string;
    description: ReactNode;
    image: ImageAsset;
    imageAlt: string;
    links?: ReactNode;
    imagePosition?: "left" | "right";
    className?: string;
}

const FeatureCard = ({ title, description, image, imageAlt, links, imagePosition = "right", className = "" }: FeatureCardProps) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const textContent = (
        <div className={
            isDesktop
                ? `w-1/2 bg-light-grey p-[5vw] md:p-16 h-full flex flex-col justify-center ${imagePosition === "left" ? "rounded-r-lg" : "rounded-l-lg"}`
                : "w-full bg-light-grey p-[6vw] rounded-t-lg flex flex-col justify-center"
        }>
            <h3 className={`${isDesktop ? "text-base md:text-xl mb-4 md:mb-8" : "text-base mb-4"} font-product-sans-regular text-grey`}>
                {title}
            </h3>
            <p className={`${isDesktop ? "text-base md:text-xl mb-4 md:mb-8" : "text-base mb-4"} tracking-wide font-product-sans-light-regular`}>
                {description}
            </p>
            {links && (
                <div className={`flex text-sm font-product-sans-light-regular tracking-wide ${isDesktop ? "space-x-6" : "space-x-6 mb-2"}`}>
                    {links}
                </div>
            )}
        </div>
    );

    const imageContent = (
        <div className={isDesktop ? "w-1/2 overflow-hidden" : "w-full"}>
            {isDesktop ? (
                <img
                    {...image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${imagePosition === "left" ? "rounded-l-lg" : "rounded-r-lg"}`}
                />
            ) : (
                <div className="w-full overflow-hidden h-[calc(100vw-40px)]">
                    <img {...image} alt={imageAlt} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-b-lg" />
                </div>
            )}
        </div>
    );

    if (isDesktop) {
        return (
            <div className={`flex items-center h-0 pb-[50%] md:h-[544px] relative ${className}`}>
                <div className="absolute inset-0 flex w-full h-full">
                    {imagePosition === "left" ? <>{imageContent}{textContent}</> : <>{textContent}{imageContent}</>}
                </div>
            </div>
        );
    }

    return (
        <div className={`flex flex-col items-center relative ${className}`}>
            {textContent}
            {imageContent}
        </div>
    );
};

export default FeatureCard;
