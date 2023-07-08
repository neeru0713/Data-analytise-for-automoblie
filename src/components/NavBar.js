
import React, { useEffect, useState } from 'react';

const NavBar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/v1/make');
          setData(await response.json());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 

  return (
    <div>
      <select className='py-1 px-2 border border-none rounded-lg m-4 bg-slate-400 w-[10%]'> 
        <option value="" disabled selected>Select</option>
        {data.map((make)=>(
          <option value={make}>{make}</option>
        ))}
        
    </select>
    </div>
  )
}

export default NavBar