import React from 'react'
import { GridLoader } from 'react-spinners';

export const LoadingScreen = () => {
  return (
    <div className='h-screen flex justify-center items-center text-high-contrast text-4xl'>
        <GridLoader color="#C2F3FF" size={45} />
        {/* Color = text-high-contrast */}  
    </div>
  )
}
