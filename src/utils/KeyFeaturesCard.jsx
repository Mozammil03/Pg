import React from 'react'
import { theme } from '../styles/theme'

const KeyFeaturesCard = ({ icon, title, description }) => {
  return (
    <div className={`p-2 pt-8 pb-8 border-[1px] border-gray-200 rounded-xl bg-gray-50 ${theme.shadow} flex flex-col text-center items-center ${theme.fontFamily} w-1/3 ${theme.borderRadius} ${theme.shadow} ${theme.transition} bg-gray-200 p-4`}>
      <div className="scale-[2] mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default KeyFeaturesCard