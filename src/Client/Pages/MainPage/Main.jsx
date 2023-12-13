import AboutUsSection from "../HomePage/AboutUsSection/AboutUsSection";
// import CollaborationsSection from "../HomePage/CollaborationsSection/CollaborationsSection";
// import FeedbackSection from "../HomePage/FeedbackSection/FeedbackSection";
// import FooterSection from "../HomePage/FooterSection/FooterSection";
// import Preloader from "../HomePage/PreLoader/PreLoader";
import ProductsSeciton from "../HomePage/ProductSection/ProductsSeciton";
import ProductSecitontwo from "../HomePage/ProductSectionTwo/ProductSectionTwo";
import ServicesSection from "../HomePage/ServicesSection/ServicesSection";
import HeroSection from './../HomePage/HeroSection/HeroSection';



const Main = () => {
    return (
        <div className="bg-black">

            <HeroSection></HeroSection>
            <ProductsSeciton></ProductsSeciton>
            <ProductSecitontwo></ProductSecitontwo>
            <ServicesSection></ServicesSection>
            <AboutUsSection></AboutUsSection>
            {/* <FeedbackSection></FeedbackSection>
            <CollaborationsSection></CollaborationsSection>
            <FooterSection></FooterSection> */}
        </div>
    );
};

export default Main;