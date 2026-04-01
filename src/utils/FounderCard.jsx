import React from 'react'
import { theme } from '../styles/theme';

const FounderCard = ({name, title, imgSrc}) => {
  return (
    <div
      className={`p-2 border-[1px] border-gray-200 rounded-xl bg-gray-50 ${theme.shadow} flex flex-col text-center items-center ${theme.fontFamily} w-1/3 ${theme.borderRadius} ${theme.shadow} ${theme.transition} bg-gray-200 p-4 z-10`}
    >
      <div className="relative">
        <img
          src={imgSrc}
          alt="Founder"
          className="rounded-2xl h-40 w-40 object-cover saturate-[0.7]"
        />

        <div className="absolute inset-0  rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}

export default FounderCard