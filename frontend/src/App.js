import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Marquee from "@/components/site/Marquee";
import Menu from "@/components/site/Menu";
import Gallery from "@/components/site/Gallery";
import Reviews from "@/components/site/Reviews";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import Cursor from "@/components/site/Cursor";
import Loader from "@/components/site/Loader";

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App custom-cursor-on" data-testid="home-page">
      <Loader />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
