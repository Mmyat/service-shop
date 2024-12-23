import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SparePart from "./components/SparePart";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import spinner from "./assets/loading.png";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900 gap-2">
          <img
            src='https://s3-alpha-sig.figma.com/img/5eb9/9f2a/25bcae70b608047863599c1b4dc26dc2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HogUUaGT55rFKEd-q8CumreHVW8UZ-M85~O43eyDXdfK2oiZfFace5pknfLmJdL18MKpPOVLx6DEK392cP9ARgNa87gfoCRos-DP2Kn9U4MEQvXM5QdQ-o0fDefZL8HefhSD9fO3RG-Jg6bj3LKhck1dsKMNcRwrdfb7agWUosQR478as9E4VP0~OKJbN6R8hLDnLtRAHxjYHJV6SHo--TWiNFO89nUi4uoTl82TSCVAJK5jhpBVLnX-PIlh1LWIIBp6HxLrL0fZ8WjrEdzxNXIZg6wKcLbeYW0LFS-M3EozHA82b39SSG1uUzUwjsYx9nrRUzcm98FHaWAhz2gtzw__'
            alt="Loading..."
            className="h-[180px] w-[180px]"
          />
          <p className="text-[42px] text-white">Partnered with WeFix</p>
          <p className="text-[27px] text-white">
            Excellence in MacBook servicing you can count on.
          </p>
          <p className="text-[27px] text-white">! EXPLORE NOW !</p>
        </div>
      ) : (
        <div className="w-full text-white">
          <Header />
          <div>
            <Home />       
            <Services />
            <SparePart />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;