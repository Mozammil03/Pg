import teamImg from '../assets/team.png';
import FounderImg from '../assets/Founder.jpeg';
import FounderCard from '../utils/FounderCard';
import AboutModal from '../components/AboutModal';
import PathGen from '../utils/PathGen';
import { useState } from 'react';

const data = [
    { title: "PathGen1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { title: "PathGen2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { title: "PathGen3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { title: "PathGen4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
]; 
const About = () => {
    
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-center h-screen p-4">
        <div className="max-w-full w-full h-[60%] rounded-2xl object-cover mt-20 overflow-hidden bg-green-300">
          <img
            src={teamImg}
            alt="Team"
            className="max-w-full w-full h-fit rounded-2xl object-cover -translate-y-24"
          />
        </div>

        <div className="w-full h-[50%] flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl font-bold text-gray-900">Our Mission</h1>
          <p className="text-gray-500 text-xl text-center max-w-2xl font-serif italic pb-4">
            "At PG JOE, our mission is to revolutionize the way PG
            accommodations are managed and experienced. We strive to create a
            seamless and efficient platform that connects tenants with their
            ideal PG accommodations, while empowering PG owners with powerful
            tools to manage their properties effectively."
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center gap-8 p-2 ">
        <h1 className="text-5xl font-bold text-gray-900">Meet the Team</h1>
        <div className="max-w-1/2 h-auto flex flex-row items-center justify-center gap-16 relative">
          <div className=" h-[2px] w-screen z-0 absolute bg-gray-200 -translate-y-4"></div>
          <div className=" h-[2px] w-screen z-0 absolute bg-gray-200 translate-y-4"></div>
          <FounderCard
            name="Mozammil"
            title="Founder & CEO"
            imgSrc={FounderImg}
          />
          <FounderCard
            name="Mozammil"
            title="Founder & CEO"
            imgSrc={FounderImg}
          />
          <FounderCard
            name="Mozammil"
            title="Founder & CEO"
            imgSrc={FounderImg}
          />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center gap-12 p-2 ">
        <h1 className="text-5xl font-bold text-gray-900 mt-10">Our Journey</h1>
        <PathGen cardDetail={data} />
      </div>
    </div>
  );
}

export default About