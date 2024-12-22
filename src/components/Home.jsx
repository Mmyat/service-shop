import me from "../assets/me.png";
import Image1 from "../assets/image-1.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="w-full bg-[#1E1E1E] md:px-10 px-7 mt-12 py-4 md:h-screen" id="home">
        <div className="flex mt-[120px] ml-[120px] sm:ml-[20px]">
          <div className="w-[500px] flex flex-col justify-around text-white gap-[8px]">
            <h6 className='font-semibold text-3xl mt-12'>NEXTPARTS</h6>
            <p className="text-xl">
              Is your MacBook not performing like it used to? Whether it’s a cracked screen, a slow system, or a faulty battery, we’re here to help. Our expert technicians provide high-quality repairs and replacement parts to get your MacBook running like new again.
            </p>
            <button className="outline p-1">View More</button>
            <img src={Image1} className="w-60 h-60" alt="" />
          </div>
        </div>
    </div>
  );
};

export default Home;
