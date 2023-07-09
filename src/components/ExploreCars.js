import React, {useEffect, useState} from 'react'
import Table from './Table'
import Filters from './Filters'
import NavBar from './NavBar'
const host = "http://localhost:8080"

const ExploreCars = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(host + '/api/v1/cars');
          const data = await response.json();
          setCarData(data);
        } catch (error) {
          console.error('Error fetching car data:', error);
        }
      };
  
      fetchData();
    }, []);

    const updateCars = async (carData) => {
        setCarData(carData);
    }
  return (
    <div>
        <NavBar />
    <div className="flex h-[100%]">

    <Filters
        updateCars = {updateCars}
    />
        <Table
        
        data={carData}
        />
    </div>
        
    </div>
  )
}

export default ExploreCars