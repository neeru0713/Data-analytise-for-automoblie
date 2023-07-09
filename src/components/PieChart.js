
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import NavBar from './NavBar';
const host = "https://data-analysis-cars.onrender.com"


const PieChart = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(host+'/api/v1/distribution');
          const result = await response.json();
  
          // Format the data for the PieChart
          const chartData = [['Body Type', 'Count']];
          result.data.forEach((item) => {
            chartData.push([item.bodyType, item.count]);
          });
  
          setData(chartData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <div className="flex flex-col">
            <NavBar/>
            <Chart
      className='border border-0 text-white w-[84%] h-[36rem] shadow-lg shadow-slate-600 ml-28 mt-[5rem] border-slate-300 rounded-lg mb-[4rem]'
        
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: 'Distribution of Cars by Body Type',
          is3D: true,
          backgroundColor: '#003951',
          titleTextStyle: { color: '#ffffff' },
          legend: {
            textStyle: {
              color: '#ffffff',
            },
          },
        }}
      />
        </div>
      
    );
  };
  

export default PieChart