import me from "../assets/me.png";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
const Home = () => {
  return (
    <div className="flex w-full h-screen bg-[#1E1E1E] md:h-screen" id="home">
      <div className="w-[500px] mt-[80px] ml-[20px] md:ml-[120px] sm:ml-[20px] flex flex-col text-white gap-[20px]">
        <h6 className='font-semibold text-3xl'>NEXTPARTS</h6>
        <p className="text-md">
          Is your MacBook not performing like it used to? Whether it’s a cracked screen, a slow system, or a faulty battery, we’re here to help. Our expert technicians provide high-quality repairs and replacement parts to get your MacBook running like new again.        
        </p>
        <button className="w-[180px] outline outline-[#CDCDCD] p-1 rounded-md">View More</button>
        <img src={Image1} className="w-72 h-72" alt="image-1" />
      </div>
      <div className="flex mt-[130px] hidden md:block md:ml-[200px] sm:ml-[20px]">
        <img src={Image2} style={{ width: '400px', height: '400px' }} alt="image-2"/>
      </div>
    </div>
  );
};

export default Home;
