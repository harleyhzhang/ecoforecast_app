import Button from "../components/Button";
import { gettingStartedImages } from "../assets/featureImages";
import LinkWithUnderline from "../components/LinkWithUnderline";
import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import FeatureCard from "../components/FeatureCard";
import { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiChevronRight } from "react-icons/hi2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SectionHeading = ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">
        {children}
    </h1>
);

const GettingStarted = () => {
    return (
        <>
            <Helmet>
                <title>Getting Started | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">Getting started</h1>

                <div className="flex justify-center mt-8">
                    <Button
                        href="/app"
                        className="mr-5"
                        target="_blank"
                    >
                        Start now
                        <GoArrowUpRight size={15} className="ml-1" />
                    </Button>
                    <a
                        href="/stepwat2"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center relative group mr-5"
                    >
                        About STEPWAT2
                        <HiChevronRight size={14} className="ml-1" />
                        <span className="absolute left-0 bottom-[4px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>

                {/* LAYER OPTIONS */}
                <SectionHeading>Layer options</SectionHeading>

                <FeatureCard
                    title="Plant functional type"
                    description="Use the checkbox to choose from big sagebrush, perennial C3 grasses, perennial C4 grasses, perennial grasses, annual C3 grasses, and forbs. Check all relevant species."
                    image={gettingStartedImages.plantFunctional}
                    imageAlt="Plant functional type"
                    className="mb-24 mt-12"
                />

                <FeatureCard
                    title="Time period and scenario"
                    description="Choose from three time periods—current (1981-2010), mid-century (2031-2060), and end-century (2071-2100)—and two climate change scenarios, RCP4.5 (a less severe trajectory) and RCP8.5 (a more extreme trajectory)."
                    image={gettingStartedImages.timePeriod}
                    imageAlt="Time period and scenario"
                    className="my-24"
                    links={
                        <LinkWithUnderline href="https://cal-adapt.org/help/faqs/which-rcp-scenarios-should-i-use-in-my-analysis/" external>
                            Read more about RCPs <GoArrowUpRight size={15} className="ml-1" />
                        </LinkWithUnderline>
                    }
                />

                <FeatureCard
                    title="Grazing and wildfire"
                    description="EcoForecast can simulate various grazing levels and incorporate wildfire scenarios. Providing inputs based on specific grazing conditions or wildfire susceptibility in your area of interest."
                    image={gettingStartedImages.grazingWildfire}
                    imageAlt="Grazing and wildfire"
                    className="mt-24 mb-12"
                />

                <p className="font-product-sans-light-regular text-base xs:text-lg sm:text-xl text-center">
                    Note that not all combinations of selected layers exist.
                </p>

                {/* AREA OF INTEREST */}
                <SectionHeading>Area of interest</SectionHeading>

                <FeatureCard
                    title="Draw a shape"
                    description="Press Draw and use the cursor to click points encircling your area of interest. Once finished, click the first point again to complete the selection."
                    image={gettingStartedImages.drawShape}
                    imageAlt="Draw a shape"
                    className="mb-24 mt-12"
                />

                <FeatureCard
                    title="Produce a rectangle"
                    description="Enter the latitude and longitude coordinates of the North-East (top right) and south west (bottom left) vertices of a rectangular area of interest."
                    image={gettingStartedImages.rectangle}
                    imageAlt="Produce a rectangle"
                    className="my-24"
                />

                {/* DOWNLOADING DATA */}
                <SectionHeading>Downloading data</SectionHeading>

                <FeatureCard
                    title="Get download link"
                    description="Press Download to generate a download link. The link contains a compressed ZIP file containing TIF rasters of all the selected layers within the area(s) of interest. If no area(s) of interest were selected, the images will cover the entire layer."
                    image={gettingStartedImages.download}
                    imageAlt="Generate a download link"
                    className="my-12"
                />

                <p className="font-product-sans-light-regular text-base xs:text-lg sm:text-xl text-center">
                    Due to the size of images, certain downloads are not possible.
                </p>

                {/* FEATURES */}
                <SectionHeading>Features</SectionHeading>

                <FeatureCard
                    title="Data viewer"
                    description={<>Use the data viewer to either click a data point on the map or enter the coordinates of a point to see the data for all selected layers. Use the&nbsp;<FaArrowUpRightFromSquare size={17} className="inline-block pb-[3px]" />&nbsp;button to view the full size chart or download it as a CSV, SVG, or PNG.</>}
                    image={gettingStartedImages.dataViewer}
                    imageAlt="Data viewer"
                    className="mb-24 mt-12"
                />

                <FeatureCard
                    title="Geometry imports and layers managers"
                    description="Use the geometry imports and layers managers to hide or show shapes or data layers. Unchecking a layer does not delete it, only hides it from view."
                    image={gettingStartedImages.manager}
                    imageAlt="Geometry and layers managers"
                    className="my-24"
                />
            </div>

            <div className="md:w-[1048px] pt-1 pb-12 bg-light-grey mx-5 ssm:mx-10 md:mx-auto rounded-lg mt-28">
                <div className="w-full sm:max-w-[750px] mx-auto px-5">
                    <h3 className="text-2xl sm:text-4xl font-product-sans-regular px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Dive into the data and try EcoForecast today.
                    </h3>
                    <div className="flex justify-center mt-8">
                        <Button
                            href="/app"
                            className="mr-5"
                            target="_blank"
                        >
                            Launch EcoForecast
                            <GoArrowUpRight size={15} className="ml-1" />
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default GettingStarted;
