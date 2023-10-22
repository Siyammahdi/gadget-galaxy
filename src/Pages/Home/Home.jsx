import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-200 ...">
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;