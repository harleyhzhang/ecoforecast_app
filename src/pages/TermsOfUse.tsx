import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";

const TermsOfUse = () => {
    return (
        <>
            <Helmet>
                <title>Terms of use | EcoForecast</title>
            </Helmet>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <p className="text-sm mt-16 xs:mt-24 sm:mt-36  text-grey text-center"><span className="font-product-sans-medium-regular">Effective: </span><span className="font-product-sans-light-regular tracking-wide">February 15, 2023</span></p>
                <h1 className="text-4xl sm:text-6xl mt-4 xs:mt-6 sm:mt-8 font-product-sans-regular mb-4 text-center">Terms of use</h1>

                <p className="mt-8 xs:mt-12 sm:mt-16 font-product-sans-light-regular text-lg">Thank you for using EcoForecast!</p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    These Terms of Use apply to your use of the EcoForecast App and EcoForecast's other services for individuals, along with any associated software applications and websites (all together, "Services"). These Terms form an agreement between you and EcoForecast. By using our Services, you agree to these Terms.
                </p>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    Our <a href="/privacy" className="transition-colors duration-300 decoration-grey hover:decoration-black decoration-2 underline">Privacy Policy</a> explains how we collect and use personal information. Although it does not form part of these Terms, it is an important document that you should read.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Who we are</h3>
                <p className="mt-4 xs:mt-6 font-product-sans-light-regular text-lg">
                    EcoForecast is a geospatial analysis and earth sciences company. Our mission is to ensure that environmental stewards and land managers have access to crucial scientific information.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Access</h3>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Minimum age. </span>
                    <span className="font-product-sans-light-regular">You must be at least 13 years old or the minimum age required in your country to consent to use the Services. If you are under 18 you must have your parent or legal guardian's permission to use the Services.</span>
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Access</h3>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">What you can do. </span>
                    <span className="font-product-sans-light-regular">Subject to your compliance with these Terms, you may access and use our Services. In using our Services, you must comply with all applicable laws as well as any other documentation, guidelines, or policies we make available to you.</span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">What you cannot do. </span>
                    <span className="font-product-sans-light-regular">You may not use our Services for any illegal, harmful, or abusive activity. For example, you may not:</span>
                </p>
                <ul className="list-disc list-inside mt-4 text-lg font-product-sans-light-regular">
                    <li className="mt-1">Use our Services in a way that infringes, misappropriates or violates anyone's rights.</li>
                    <li className="mt-1">Modify, copy, lease, sell or distribute any of our Services.</li>
                    <li className="mt-1">Attempt to or assist anyone to reverse engineer, decompile or discover the source code or underlying components of our Services, including our models, algorithms, or systems (except to the extent this restriction is prohibited by applicable law).</li>
                    <li className="mt-1">Use Output to develop models that compete with EcoForecast.</li>
                </ul>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Third party Services. </span>
                    <span className="font-product-sans-light-regular">Our services may include third party software, products, or services, ("Third Party Services") and some parts of our Services, like the EcoForecast app, may include output from those services ("Third Party Output"). Third Party Services and Third Party Output are subject to their own terms, and we are not responsible for them.</span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Feedback. </span>
                    <span className="font-product-sans-light-regular">OWe appreciate your feedback, and you agree that we may use it without restriction or compensation to you.</span>
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Content</h3>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Your content. </span>
                    <span className="font-product-sans-light-regular">You may provide input to the Services ("Input"), and receive output from the Services based on the Input ("Output"). Input and Output are collectively “Content.” You are responsible for Content, including ensuring that it does not violate any applicable law or these Terms. You represent and warrant that you have all rights, licenses, and permissions needed to provide Input to our Services.</span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Accuracy. </span>
                    <span className="font-product-sans-light-regular">Simulation models such as STEPWAT2 are rapidly evolving tools. We are constantly working to improve our Services to make them more accurate, reliable, safe, and beneficial. Given the predictive nature of simulation modelling, use of our Services may, in some situations, result in Output that does not accurately reflect real people, places, or facts. </span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    When you use our Services you understand and agree:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg font-product-sans-light-regular">
                    <li className="mt-1">Output may not always be accurate. You should not rely on Output from our Services as a sole source of truth or factual information, or as a substitute for professional advice.</li>
                    <li className="mt-1">You must evaluate Output for accuracy and appropriateness for your use case, including using human review as appropriate, before using or sharing Output from the Services.</li>
                </ul>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Our IP rights</h3>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    We and our affiliates own all rights, title, and interest in and to the Services.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Discontinuation of Services</h3>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    We may decide to discontinue our Services, but if we do, we will give you advance notice.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Disclaimer of warranties</h3>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    OUR SERVICES ARE PROVIDED “AS IS.” EXCEPT TO THE EXTENT PROHIBITED BY LAW, WE AND OUR AFFILIATES AND LICENSORS MAKE NO WARRANTIES (EXPRESS, IMPLIED, STATUTORY OR OTHERWISE) WITH RESPECT TO THE SERVICES, AND DISCLAIM ALL WARRANTIES INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SATISFACTORY QUALITY, NON-INFRINGEMENT, AND QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF ANY COURSE OF DEALING OR TRADE USAGE. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ACCURATE OR ERROR FREE, OR THAT ANY CONTENT WILL BE SECURE OR NOT LOST OR ALTERED.
                </p>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    YOU ACCEPT AND AGREE THAT ANY USE OF OUTPUTS FROM OUR SERVICE IS AT YOUR SOLE RISK AND YOU WILL NOT RELY ON OUTPUT AS A SOLE SOURCE OF FACTUAL INFORMATION.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Disclaimer of warranties</h3>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    NEITHER WE NOR ANY OF OUR AFFILIATES WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, OR DATA OR OTHER LOSSES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE LIMITATIONS IN THIS SECTION APPLY ONLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                </p>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    Some countries and states do not allow the disclaimer of certain warranties or the limitation of certain damages, so some or all of the terms above may not apply to you, and you may have additional rights. In that case, these Terms only limit our responsibilities to the maximum extent permissible in your country of residence.
                </p>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    ECOFORECAST'S AFFILIATES ARE INTENDED THIRD PARTY BENEFICIARIES OF THIS SECTION.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">Indemnity</h3>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">
                    If you are a business or organization, to the extent permitted by law, you will indemnify and hold harmless us, our affiliates, and our personnel, from and against any costs, losses, liabilities, and expenses (including attorneys' fees) from third party claims arising out of or relating to your use of the Services and Content or any violation of these Terms.
                </p>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-product-sans-regular mt-8 xs:mt-12 sm:mt-16">General Terms
                </h3>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Assignment. </span>
                    <span className="font-product-sans-light-regular">You may not assign or transfer any rights or obligations under these Terms and any attempt to do so will be void. We may assign our rights or obligations under these Terms to any affiliate, subsidiary, or successor in interest of any business associated with our Services.</span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Changes to these Terms or our Services. </span>
                    <span className="font-product-sans-light-regular">We are continuously working to develop and improve our Services. We may update these Terms or our Services accordingly from time to time. For example, we may make changes to these Terms or the Services due to:</span>
                </p>
                <ul className="list-disc list-inside mt-4 text-lg font-product-sans-light-regular">
                    <li className="mt-1">Changes to the law or regulatory requirements.</li>
                    <li className="mt-1">Security or safety reasons.</li>
                    <li className="mt-1">Circumstances beyond our reasonable control.</li>
                    <li className="mt-1">Changes we make in the usual course of developing our Services.</li>
                    <li className="mt-1">To adapt to new technologies.</li>
                </ul>
                <p className="mt-4 xs:mt-6 text-lg font-product-sans-light-regular">We will give you at least 30 days advance notice of changes to these Terms that materially adversely impact you either via email or an in-product notification. All other changes will be effective as soon as we post them to our website. If you do not agree to the changes, you must stop using our Services.</p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Delay in enforcing these Terms. </span>
                    <span className="font-product-sans-light-regular">Our failure to enforce a provision is not a waiver of our right to do so later. Except as provided in the dispute resolution section above, if any portion of these Terms is determined to be invalid or unenforceable, that portion will be enforced to the maximum extent permissible and it will not affect the enforceability of any other terms.</span>
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    <span className="font-product-sans-regular">Entire agreement. </span>
                    <span className="font-product-sans-light-regular">These Terms contain the entire agreement between you and EcoForecast regarding the Services and, other than any Service-specific terms, supersedes any prior or contemporaneous agreements between you and EcoForecast. </span>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfUse;
