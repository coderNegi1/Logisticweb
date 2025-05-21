import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourierService from './pages/CourierService';
import AirFreight from './pages/AirFreight';
import OceanFreight from './pages/OceanFreight';
import WarehouseSolutions from './pages/WarehouseSolutions';
import TransportationFreight from './pages/TransportationFreight';
import CargoInsurance from './pages/CargoInsurance';
import CustomsClearance from './pages/CustomsClearance';
import SubHeader from './components/SubHerader';


function App() {
  return (
    <>
    <SubHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services/courier-service" element={<CourierService />} /> 
        <Route path="/services/air-freight" element={<AirFreight />} /> 
        <Route path="/services/ocean-freight" element={<OceanFreight />} /> 
        <Route path="/services/warehouse-solutions" element={<WarehouseSolutions />} /> 
        <Route path="/services/transportation-freight" element={<TransportationFreight />} /> 
        <Route path="/services/cargo-insurance" element={< CargoInsurance />} /> 
        <Route path="/services/customs-clearance" element={<CustomsClearance />} /> 




      </Routes>
      <Footer />

    </>
  );
}

export default App;
