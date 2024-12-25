import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import services from "../../public/services.js";
import facebook from "../assets/facebook.svg";
import map from "../assets/map.jpg";
import { useState } from "react";

const Home = () => {
  const advantages = [
    { 
      id: 1,
      name: "Trusted Expertise", 
      description: "Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
    { 
      id: 2,
      name: "High-Quality Parts", 
      description: "We use only the best replacement parts for your devices to ensure durability and performance.", 
    },
    { 
      id: 3,
      name: "Affordable Prices", 
      description: "Competitive pricing without compromising on quality and reliability.", 
    },
    { 
      id: 4,
      name: "Quick Turnaround", 
      description: "Fast repair times so you can get back to your routine as soon as possible.", 
    },
    { 
      id: 5,
      name: "Excellent Support", 
      description: "Responsive customer service to answer all your queries promptly.", 
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sophia",
      description: "Great service and Customer care! Thank you!",
      rating: 5,
    },
    {
      id: 2,
      name: "Liam",
      description: "Very satisfied with the product!",
      rating: 4,
    },
    {
      id: 3,
      name: "Emma",
      description: "Fast delivery and amazing quality!",
      rating: 5,
    },
    {
      id: 4,
      name: "Noah",
      description: "Highly recommend this service!",
      rating: 5,
    },
    {
      id: 5,
      name: "Olivia",
      description: "Exceptional customer support and value.",
      rating: 4,
    },
  ];
  const contacts = [
      {
        icon: facebook,
        link: "https://www.facebook.com/nextparts.yangon",
        title: "facebook",
      },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#1E1E1E] text-white h-screen">
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">NEXTPARTS</h1>
          <p className="text-lg leading-7 mb-6">
            Is your MacBook not performing like it used to? Whether it’s a cracked screen, a slow system, or a faulty battery, we’re here to help. Our expert technicians provide high-quality repairs and replacement parts to get your MacBook running like new again.
          </p>
          <button className="bg-[#CDCDCD] text-black py-2 px-6 rounded-md hover:bg-gray-300">View More</button>
          <img src={Image1} className="w-72 h-72" alt="image-1" />
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={Image2} alt="MacBook repair" className="w-72 h-72 object-contain" />
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-white py-10 px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-dark text-2xl font-bold">{service.name}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
                {service.link && (
                  <a href={service.link} className="text-blue-600 mt-4 inline-block hover:underline">
                    Learn More
                  </a>
                )}
              </div>
              <div className="md:w-1/2 flex gap-4">
                {service.image.map((img, index) => (
                  <img key={index} src={img} alt={service.name} className="w-36 h-36 object-cover rounded-lg shadow-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl text-dark font-semibold text-center mb-8">Why Choose Us</h2>
        <div className="top-1/2 w-full h-[1.5px] bg-paragraph"></div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="bg-white shadow-md p-6 w-72 rounded-lg border border-gray-200">
              <h2 className="text-dark text-xl font-semibold">{advantage.id}</h2>
              <h3 className="text-dark text-xl font-semibold">{advantage.name}</h3>
              <p className="text-gray-600 mt-2">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Customer Reviews */}
      <section className="bg-white py-4">
        <h2 className="text-3xl text-dark font-semibold text-center mb-4">What Our Customers Say</h2>
        <div className="top-1/2 w-full h-[1.5px] bg-paragraph mb-6"></div>
        <div className="flex items-center justify-center gap-4 relative">
          <button onClick={prevReview} className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">‹</button>
          <div className="bg-gray-100 p-6 w-96 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-dark font-semibold">{reviews[currentIndex].name}</h3>
            <p className="text-gray-600 mt-2">{reviews[currentIndex].description}</p>
            <div className="mt-4">
              {[...Array(reviews[currentIndex].rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">&#9733;</span>
              ))}
            </div>
          </div>
          <button onClick={nextReview} className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">›</button>
        </div>
      </section>
      <div className="bg-dark md:px-10 px-7 py-2" id="contact">
        <div className="flex flex-col md:flex-row">
          {/* Text and Icons */}
          <div className="md:w-1/2">
            <h1 className="text-white font-semibold text-3xl mt-16">
              Join on us
            </h1>
            {/* Social Icons */}
            <div className="flex">
              {contacts.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title={item.title}
                >
                  <img
                    className="rounded-lg ml-4 hover:scale-125 transition-transform"
                    style={{
                      width: "32px",
                      aspectRatio: "1/1",
                    }}
                    src={item.icon}
                    alt={item.title}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Form */}
          <div className="md:w-1/2">
            <a
              href="https://www.google.com/maps/place/Nextparts+(Yangon)/@16.7746554,96.1608385,17z/data=!3m1!4b1!4m6!3m5!1s0x30c1ed8804b634bd:0xfcd3e08041cc8b58!8m2!3d16.7746554!4d96.1634134!16s%2Fg%2F11t6nn6k5m?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="google_map_pointer"
            >
              <img
                src={map}
                alt="NextPart's Map"
                className="w-[400px] h-[200px] object-cover rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-6 text-center">
        <div className="top-1/2 w-full h-[2px] bg-white"></div>
        <p className="text-start ml-2">© 2024 NEXTPARTS. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;