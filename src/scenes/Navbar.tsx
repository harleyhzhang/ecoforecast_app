import { useState, useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo-shadow-notext.webp";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const prevScrollPos = useRef(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`bg-white z-40 w-full fixed top-0 py-2 transition-transform duration-300 delay-100 ${visible ? "" : "-translate-y-full"}`}>
            <div className="flex items-center justify-between mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <a href="/" className="flex items-center space-x-2 no-select">
                    <img src={logo} width={624} height={721} alt="ecoforecast-logo" className="h-8 sm:h-10 w-auto z-50 pr-1 no-select" />
                    <span className="font-product-sans-medium-regular text-xl xs:text-2xl text-dark-grey hidden sm:block no-select">EcoForecast</span>
                </a>
                <div className="flex items-center space-x-3 xs:space-x-5">
                    <a
                        href="/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-product-sans-light-regular text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-opacity duration-300 text-white px-3 sm:px-4 py-2 rounded-full"
                    >
                        {isAboveSmallScreens ? "Launch app" : "Launch"}
                        <GoArrowUpRight className="ml-1" />
                    </a>
                    <a href="/getting-started" className="font-product-sans-light-regular tracking-wide text-sm">
                        Getting started
                    </a>
                    <a href="/stepwat2" className="font-product-sans-light-regular tracking-wide text-sm">
                        {isAboveSmallScreens ? "About STEPWAT2" : "STEPWAT2"}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
