import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import { GoArrowUpRight } from "react-icons/go";

const STEPWAT2 = () => {
    return (
        <>
            <Helmet>
                <title>About STEPWAT2 | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">About STEPWAT2</h1>
                <div className="w-[350px] xs:w-[400px] sm:w-[500px] mx-auto">
                    <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-base xs:text-lg sm:text-xl text-center">An individual-based model for exploring the impact of climate and disturbance on dryland plant communities</p>
                </div>

                <div className="flex flex-col items-center mt-8 space-y-6 xs:space-y-0 xs:flex-row xs:justify-center xs:space-x-5">
                    <a
                        href="https://doi.org/10.1002/ecs2.2394"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-black hover:opacity-90 transition-opacity duration-300 text-white px-5 py-2 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read the paper
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                    <a
                        href="https://github.com/DrylandEcology/STEPWAT2"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center relative group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Run STEPWAT2
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                    <a
                        href="https://github.com/DrylandEcology/rSFSTEP2"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center relative group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Run the R program
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>

                <p className="mt-16 xs:mt-24 font-product-sans-light-regular text-lg">
                    STEPWAT2 is an individual-based simulation model designed for dryland ecosystems, focusing on the impacts of climate change and disturbance regimes on plant communities. It integrates a soil water model to simulate resource competition among plants based on root distribution and temporal soil moisture dynamics. Validated with field data from big sagebrush communities, STEPWAT2 provides insights into how climate shifts and disturbances like fire and grazing influence species composition and biomass. This model serves as a valuable tool for understanding long-term ecological dynamics and informing conservation strategies in arid environments.
                </p>

                <h3 className="text-xl xs:text-2xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-14">
                    Model validation
                </h3>
                <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-lg">
                    The study validated a model using vegetation data collected from 15 distinct big sagebrush plant communities across the western United States during 2013 and 2014. These sites were strategically chosen to encompass various Greater Sage-grouse Management Zones (MZs) with significant breeding populations of greater sage-grouse and minimal disturbance from human activities such as oil and gas development, invasive species, fire, and heavy grazing. Each site was characterized by level topography, ensuring consistency in environmental conditions.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    Within each site, three 100 m² plots were established, each containing 30 randomly sampled 20 &times; 50 cm quadrats. Vegetation data, including percent canopy cover for each plant species categorized into specific cover classes, was recorded. Plant taxa were assigned to functional types such as annual and perennial C3 forbs and grasses, C4 grasses, big sagebrush, non-sagebrush shrubs, and succulents. Absolute cover for each functional type in the 90 quadrats per site was calculated by summing cover class midpoints and averaging these values to determine site-level mean cover.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    To characterize big sagebrush stand structure, the number of individuals and canopy volume size class distribution were recorded across the plots. Canopy volume was calculated for each big sagebrush individual using diameter and height measurements, providing insights into biomass distribution within the sites. Soil samples collected from multiple depths in each plot were analyzed to determine soil texture, crucial for understanding nutrient availability and water retention.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    The STEPWAT2 model was employed to simulate plant community dynamics across the 15 sites under current and future climate scenarios. Simulations were conducted over 300 years with 100 iterations per site, considering variations in fire return intervals and grazing intensities. Model parameters included space allocation, rooting depth distributions, phenological activity, and specific growth characteristics tailored to each plant functional type observed in the field.
                </p>

                <h3 className="text-xl xs:text-2xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-14">
                    Model application
                </h3>
                <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-lg">
                    The study focuses on projecting biomass changes in big sagebrush plant communities across 15 sites in the western United States under varying climate scenarios and disturbance regimes by the end of the century. Utilizing the STEPWAT2 model forced by 13 General Circulation Models (GCMs) for the Representative Concentration Pathway 8.5 (RCP8.5), simulations spanned from 1980-2010 baseline conditions to 2070-2100 projections.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    Under scenarios with no fire and light grazing, significant increases in big sagebrush biomass were anticipated by 2100, particularly in the Northeastern sites (MZs I and II) and one high-elevation site in the Southwest (MZ III). Conversely, sites furthest west exhibited projected decreases in big sagebrush biomass. Perennial C3 grasses showed mixed trends, with some sites projecting biomass increases while others anticipated declines. Wyoming sites were notable for potential biomass increases in perennial C3 grasses.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    Other functional types generally showed biomass decreases or stability, except for perennial C4 grasses, which were expected to increase across all applicable sites. Grazing intensity interacted distinctly with climate impacts: heavy grazing mitigated increases in big sagebrush biomass relative to light grazing, and it substantially reduced perennial C3 grass biomass across numerous sites.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    Fire dynamics played a pivotal role, significantly reducing future big sagebrush biomass compared to scenarios with no fire. Perennial C3 grass biomass, however, showed less sensitivity to fire frequency, indicating a quicker recovery post-fire compared to big sagebrush.
                </p>
            </div>
            <div className="sm:[w-750px] md:w-[960px] pt-1 pb-12 bg-light-grey ssm:mx-10 md:mx-auto sm:rounded-lg mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <h3 className="text-xl xs:text-2xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-14">
                        References
                    </h3>
                    <p className="mt-6 xs:mt-8 font-product-sans-light-regular text-[.9rem] no-contextual-alternates">
                        Palmquist, K. A., J. B. Bradford, T. E. Martyn, D. R. Schlaepfer, and W. K. Lauenroth. 2018. STEPWAT2: an individual-based model for exploring the impact of climate and disturbance on dryland plant communities. <span className="font-product-sans-light-italic">Ecosphere</span> 9(8)e02394. <a href="https://doi.org/10.1002/ecs2.2394" className="underline transition-colors duration-300 decoration-grey decoration-1 hover:decoration-black" target="_blank" rel="noopener noreferrer">10.1002/ecs2.2394</a>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default STEPWAT2;
