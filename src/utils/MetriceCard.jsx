import React from 'react'
import { theme } from '../styles/theme'


const MetriceCard = ({ title, value }) => {
  return (
    <div className={`p-2 border-[1px] scale-150 border-gray-200 bg-gray-50 ${theme.shadow} w-32 h-32 justify-center
    flex flex-col text-center items-center ${theme.fontFamily} rounded-full ${theme.transition} bg-gray-200`}>
      <span className="text-3xl font-bold text-gray-900">{value}</span>
      <span className="text-sm text-gray-600">{title}</span>
    </div>
  )
}

export default MetriceCard