
import Banner from "../components/sections/Banner";
import OurCategories from "../components/sections/OurCategories";
import Discover from "../components/sections/Discover";
import Aboutus from "../components/sections/Aboutus";
import OurService from "../components/sections/OurService";
import Subscribe from "@/components/sections/Subscribe";
import Blog from "@/components/sections/Blog";

const Home = () => {
        return (
        <>
        <Banner />
        <Aboutus/>
        <OurService/>
        <OurCategories />
        <Discover />
        <Blog/>
        <Subscribe/>
        </>
        );
};

export default Home