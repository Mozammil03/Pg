import React from 'react';
import { useData } from '../App';
import { theme } from '../styles/theme';



const AboutModal = () => {
    // const [isOpen, setIsOpen] = useState(true);
    const { isModalOpen, setIsModalOpen } = useData();
    const onClose = () => {
      setIsModalOpen(false);
    }
  
  return (
    <div className={`${isModalOpen?"":"hidden"} ${theme.modalView}`}>
      <button 
          onClick={onClose}
          className="text-gray-1-600 hover:text-gray-100 p-2 rounded-full bg-gray-300 transition-colors duration-200 absolute top-12 right-[31rem] border-[1px] border-gray-100 "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-4 overflow-y-auto max-h-[90vh] mt-12">
        {/* Close Button */}
        
        <h2 className="text-2xl font-semibold text-gray-800">About PG Joe</h2>
        <p className="text-gray-600">
          Welcome to <strong>PG Joe</strong> — where comfort meets convenience in the heart of Bengaluru.
        </p>
        <p className="text-gray-600">
          Located in <strong>Koramangala 5th Block</strong>, PG Joe has been home to students, working professionals, 
          and digital nomads since <strong>2012</strong>. Originally a family home run by the ever-welcoming Uncle Joe, 
          the place evolved into a modern, community-driven PG without losing its homely charm.
        </p>

        <div className="border-t pt-3">
          <h3 className="text-lg font-semibold text-gray-700">📍 Address</h3>
          <p className="text-gray-600">
            #214, 7th Cross, Koramangala 5th Block, Bengaluru – 560095
            <br />
            (Walking distance from Forum Mall and top IT parks.)
          </p>
        </div>

        <div className="border-t pt-3">
          <h3 className="text-lg font-semibold text-gray-700">🛏️ Rooms</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Single, double, and triple-sharing options</li>
            <li>Furnished with beds, wardrobes, and study tables</li>
            <li>Attached and common bathrooms</li>
            <li>AC & non-AC options</li>
          </ul>
        </div>

        <div className="border-t pt-3">
          <h3 className="text-lg font-semibold text-gray-700">🍽️ Food</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Hygienic, home-style Veg & Non-Veg meals</li>
            <li>Breakfast, lunch, and dinner</li>
            <li>Weekend specials like Sunday biryani</li>
          </ul>
        </div>

        <div className="border-t pt-3">
          <h3 className="text-lg font-semibold text-gray-700">🛠️ Facilities & Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>High-speed Wi-Fi</li>
            <li>24/7 hot water & power backup</li>
            <li>Daily housekeeping & laundry</li>
            <li>Filtered drinking water</li>
            <li>Access to fridge & microwave</li>
            <li>Rooftop chill zone with city views</li>
            <li>Biometric entry + CCTV</li>
          </ul>
        </div>

        <div className="border-t pt-3">
          <h3 className="text-lg font-semibold text-gray-700">🎉 Extras</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Movie nights, chai evenings, and festive celebrations</li>
            <li>Supportive staff who know you by name</li>
            <li>Easy access to cafes, gyms, stores, co-working spaces</li>
          </ul>
        </div>

        <p className="text-gray-700 border-t pt-4">
          At <strong>PG Joe</strong>, you’re not just booking a room — you’re joining a warm, welcoming community.
          Whether you're staying for a semester or starting a new job, we make sure you feel right at home.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;