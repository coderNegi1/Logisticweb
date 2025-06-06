import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import Bg3 from '../assets/aboutus.avif';
// import WhyChooseUs from '../components/WhyChooseUs'




const About = () => {
  return (
    <>
      <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})`,backgroundSize: 'cover',  }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">About Us</h1>
          <nav className="text-white text-sm">
            <ol className="list-reset flex space-x-2">
              <li>
                <Link to="/" className="text-white hover:underline">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">About</li>
            </ol>
          </nav>
        </div>
      </div>

      <AboutSection />
   
    </>

  );
};

export default About;
