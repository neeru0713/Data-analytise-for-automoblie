import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import NavBar from './NavBar';


const host = "http://localhost:8080"

const BarChart = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(host+'/api/v1/revenue');
          const result = await response.json();
  
          // Format the data for the BarChart
          const chartData = [['Make', 'Potential Revenue']];
          result.data.forEach((item) => {
            chartData.push([item.make, item.potentialRevenue]);
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
        
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: 'Potential Revenue by Car Make',
          hAxis: {
            title: 'Potential Revenue',
            minValue: 0,
            textStyle: { color: 'white' }, // Change hAxis label color here
            titleTextStyle: { color: '#ffffff' }, 
          },
          vAxis: {
            title: 'Car Make',
            minValue: 0,
            textStyle: { color: 'white' }, // Change vAxis label color here
            titleTextStyle: { color: '#ffffff' }, 
          },
          backgroundColor: '#003951',
          colors: ['#A7D1F0'], // Change line colors here
          titleTextStyle: { color: '#ffffff' },
          series: {
            0: { color: '#ffffff' }, // Change color of the potential revenue indicator to white
          },
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


export default BarChart