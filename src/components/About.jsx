const About = () => {
  const advantages = [
    { 
      id : 1,
      name: "Trusted Expertise", 
      description:"Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
    { 
      id : 2,
      name: "Trusted Expertise", 
      description:"Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
    { 
      id : 3,
      name: "Trusted Expertise", 
      description:"Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
    { 
      id : 4,
      name: "Trusted Expertise", 
      description:"Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
    { 
      id : 5,
      name: "Trusted Expertise", 
      description:"Able to discuss and repair directly with a technician with more than 9 years of experience", 
    },
  ];
  return (
    <div
      className="flex flex-col w-full h-screen bg-[#CBCFD273] justify-center items-center gap-8 p-6 overflow-y-auto"
      id="about">
      {/* Section Title with Border */}
      <div className="relative flex items-center justify-center w-full">
        <h1 className="text-dark text-center font-semibold text-3xl px-4 z-10">
          Why choose us
        </h1>
      </div>
      {/* Horizontal Line */}
      <div className="top-1/2 w-full h-[2px] bg-dark"></div>
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="w-[300px] h-auto bg-white flex flex-col items-start justify-start gap-4 p-5 shadow-md transition-all duration-500 rounded-md border border-gray-300"
          >
            <h2 className="text-2xl text-[#1E1E1E] font-semibold">{advantage.id}</h2>
            <p className="text-2xl text-[#1E1E1E] font-semibold">{advantage.name}</p>
            <p className="text-[14px] text-[#4C4C4C] font-normal">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default About;
