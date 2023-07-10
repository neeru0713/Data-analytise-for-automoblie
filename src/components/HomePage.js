import React from 'react'
import NavBar from './NavBar'
import thar from './thar.jpeg'
const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <div className="text-center text-[#003951]  pt-8 flex flex-col items-center">
      <p className="text-4xl font-bold">Welcome to Data Analytics of Auto mobiles</p>
      <p className="pt-2 text-lg font-semibold">Please use the navbar to explore the application</p>
      <img src={thar} className='h-[570px] w-[900px] '/>
      </div>
    </div>
  )
}

export default HomePage