import HeroBanner from '../components/HeroBanner.jsx';
import WhyProVol from '../components/WhyProVol.jsx';
import OurServices from '../components/OurService.jsx';
import ServingPrayagraj from '../components/ServingPrayagraj.jsx';
import CTA from '../components/CTA.jsx';
const Home = () => { 
    return (
        <div>
            <HeroBanner />
            <WhyProVol />
            <OurServices />
            <ServingPrayagraj />
            <CTA />
        </div>
    );
}
export default Home;