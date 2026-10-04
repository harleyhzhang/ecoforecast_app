import backgroundImg from "../assets/Home/landing-bg.webp";
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
    return (
        <section
            className="relative flex items-center h-[30rem] md:h-[40rem] sm:h-[34rem] pb-20 sm:pb-10 pt-32 sm:pt-20"
            style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {/* BLACK OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>

            {/* LANDING TEXT */}
            <div className="z-30 text-left mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <div>
                    <p className="text-white font-product-sans-light-regular text-3xl sm:text-4xl md:text-5xl tracking-wide z-10">
                        Earth Sciences for Environmental Stewards & Land Managers
                    </p>
                    <p className="text-white font-product-sans-light-regular mt-8 tracking-wide mb-7 text-base sm:text-xl">
                        Predict changes in dryland plant dynamics. Backed by real science.
                    </p>
                </div>

                {/* LAUNCH APP */}
                <div className="flex flex-row items-center mt-10">
                    <a className="rounded-r-sm mb-4 md:mb-0 md:mr-4" href="/app" target="_blank" rel="noopener noreferrer">
                        <div className="text-white font-product-sans-light-regular text-sm sm:text-base bg-blue transition duration-500 w-full h-full flex items-center justify-center tracking-wide px-5 sm:px-7 py-2 sm:py-3 rounded-full hover:opacity-90">
                            Launch EcoForecast
                            <GoArrowUpRight size={17} className="ml-1" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing;
