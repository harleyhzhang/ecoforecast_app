import { Link } from "react-router";
import useMediaQuery from "../hooks/useMediaQuery";

const LaunchApp = () => {
    const isLargeEnough = useMediaQuery("(min-width: 1109px) and (min-height: 468px)");

    return (
        <>
            <div className="bg-light-grey">
                <div className={`relative h-screen w-screen overflow-hidden ${!isLargeEnough ? "hidden" : ""}`}>
                    <embed
                        src="https://ecoforecast.projects.earthengine.app/view/ecoforecast"
                        title="EcoForecast App"
                        className="h-full w-full border-0"
                    />
                    <div className="absolute top-0 right-0 w-72 h-14 bg-light-grey z-50"></div>
                    {isLargeEnough && (
                        <Link to="/" className="absolute top-3 left-5 w-[12rem] h-11 m-0 p-0"></Link>
                    )}
                </div>
                {!isLargeEnough && (
                    <div className="relative h-screen w-screen overflow-hidden">
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-lightgrey z-50">
                            <div className="bg-light-grey p-6 m-5 rounded border border-[#e0e0e0] text-dark-grey text-center font-product-sans-light-regular tracking-wide">
                                <p>EcoForecast requires a minimum screen size of 1109&times;468px.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default LaunchApp;
