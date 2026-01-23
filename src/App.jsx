import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import JoinVolunteer from "./pages/JoinVolunteer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<JoinVolunteer />} />
        <Route path="/sitemap.xml" />
        <Route path="/robots.txt" />

      </Routes>
      <Footer />
    </>
  );
}
