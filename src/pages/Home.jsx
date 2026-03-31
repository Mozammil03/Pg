import React from "react";
import { theme } from "../styles/theme";

import AboutModal from "../components/AboutModal";
import { useData } from "../App";
import Register from "../components/user/Register";
import RoomCard from "../utils/RoomCard";
import { IconBed, IconCash, IconLine, IconUsers } from "@tabler/icons-react";
import KeyFeaturesCard from "../utils/KeyFeaturesCard";
import MetriceCard from "../utils/MetriceCard";
import TestimonialCard from "../utils/TestimonialCard";

const Home = () => {
  const { isModalOpen, setIsModalOpen } = useData();
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className=" h-screen w-full gap-2 flex flex-col p-4 items-center">
        {/* <div className='bg-green-300 h-screen w-full'>helo</div> */}
        <div className="h-screen w-full gap-2 flex flex-row p-4 pt-30 items-center overflow-hidden">
          <div className="flex flex-col w-1/2 text-left justify-start">
            <h1 className="text-7xl font-bold mb-8">Smarter PG Management</h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Streamline your PG operations with our all-in-one management
              solution. From room allocations to payment tracking, maintain
              complete control of your property. Reduce administrative workload
              by 70% and boost occupancy rates. Join 500+ PG owners who trust PG
              Joe for efficient property management.
            </p>

            <div className="flex flex-row gap-4 mt-8">
              <button
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
                onClick={openModal}
              >
                Start Free Trial
              </button>
              <button
                className="border border-gray-900 text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={openModal}
              >
                View Demo
              </button>
            </div>

            <div className="flex flex-row gap-8 mt-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-600">Active Properties</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">98%</span>
                <span className="text-sm text-gray-600">Collection Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">30min</span>
                <span className="text-sm text-gray-600">Setup Time</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center h-full">
            <div
              className={`mt-80 border-[1px] border-gray-200 w-full h-80% rounded-xl bg-gray-50 ${theme.shadow}`}
            >
              <div className="flex flex-row items-center gap-5 h-10 p-8 border-b-2">
                <button className="text-gray-500">&lt; </button>
                <button className="text-gray-500">&gt;</button>
                <button className="bg-gray-200 p-[0.2rem] h-8 w-8 rounded-md border-white">
                  {" "}
                  +{" "}
                </button>

                <ul className="w-1/2 flex flex-row items-center justify-between ">
                  <li className="">Room</li>
                  <li className="text-gray-500">Tenants</li>
                  <li className="text-gray-500">Payment</li>
                </ul>
              </div>

              <div className="">
                <h1 className="text-5xl p-4 text-gray-900">Rooms</h1>
              </div>
              <RoomCard
                room={{
                  id: 1,
                  status: "VACANT",
                  price: 7000,
                  active: true,
                  floor: "1st",
                  occupancy: 1,
                }}
              />
              <RoomCard
                room={{
                  id: 2,
                  status: "VACANT",
                  price: 7000,
                  active: false,
                  floor: "Ground",
                  occupancy: 1,
                }}
              />
              <RoomCard
                room={{
                  id: 3,
                  status: "VACANT",
                  price: 5000,
                  active: false,
                  floor: "2nd",
                  occupancy: 1,
                }}
              />
              <RoomCard
                room={{
                  id: 4,
                  status: "VACANT",
                  price: 2000,
                  active: false,
                  occupancy: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 h-full w-full flex flex-col items-center gap-8">
        <div>
          <div className="w-full text-center text-3xl font-extrabold">
            Key Features
          </div>
          <div className="flex flex-row gap-8 pt-8">
            <KeyFeaturesCard
              icon={<IconUsers />}
              title="Tenant Management"
              description="Effortlessly manage tenant information, track occupancy, and maintain a comprehensive database for your PG property."
            />
            <KeyFeaturesCard
              icon={<IconCash />}
              title="Automated Payment System"
              description="Streamline your payment processes with our automated system, ensuring timely and secure transactions."
            />
            <KeyFeaturesCard
              icon={<IconBed />}
              title="Room Tracking"
              description="Monitor and manage your property's room availability and occupancy in real-time."
            />
          </div>
        </div>

        <div className="w-full relative ">
          <div className="w-full text-center text-3xl font-extrabold mb-16 ">
            Why Choose PG Joe?
          </div>

          <div className="flex flex-row gap- w-full h-fit">
            <div className=" h-[2px] w-screen z-1 absolute bg-gray-200 -translate-x-28 translate-y-12"></div>
            <div className=" h-[2px] w-screen z-1 absolute bg-gray-200 -translate-x-28 translate-y-20"></div>
            <div className="z-10 flex gap-28 flex-row place-content-center items-center justify-center w-full">
              <MetriceCard title="Load Reduction " value="70%" />
              <MetriceCard title="Collection Rate" value="98%" />
              <MetriceCard title="Setup Time" value="30min" />
            </div>
          </div>
        </div>

        <div className="w-full relative p-4 ">
          <div className="w-full text-center text-3xl font-extrabold mb-8 pt-16">
            What Our Users Say
          </div>

          <div className="flex flex-row gap- w-full h-fit">
            <div className="z-10 flex gap-28 flex-row place-content-center items-center justify-center w-full">
              <TestimonialCard
                profileUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTecWVG03Q76l1-z24nS61GOBn9Rq-7DSkw&s"
                name="John Doe"
                role="Tenant"
                content="Easy to manage and has significantly improved our PG operations. Highly recommend! Customer support is also top-notch."
              />
              <TestimonialCard
                profileUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTecWVG03Q76l1-z24nS61GOBn9Rq-7DSkw&s"
                name="Jane Smith"
                role="PG Owner"
                content=" The automated payment system is a game-changer, and the tenant management features are incredibly efficient."
              />
             <TestimonialCard
                profileUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTecWVG03Q76l1-z24nS61GOBn9Rq-7DSkw&s"
                name="Alice Johnson"
                role="PG Owner"
                content="I was skeptical at first, but PG Joe has exceeded my expectations. The room tracking feature has helped me optimize occupancy."
              />  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
