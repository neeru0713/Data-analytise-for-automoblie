import React, { useState } from 'react';
const host = "https://data-analysis-cars.onrender.com"
const Filters = ({updateCars}) => {
  const [options, setOptions] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    let newOptions = [];

    if (selectedValue === 'Make') {
      newOptions = [
        'Aston Martin', 'Audi', 'Bajaj', 'Bentley', 'Bmw', 'Bugatti', 'Datsun',
        'Dc', 'Ferrari', 'Fiat', 'Force', 'Ford', 'Honda', 'Hyundai', 'Icml',
        'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Land Rover Rover',
        'Lexus', 'Mahindra', 'Maruti Suzuki', 'Maruti Suzuki R', 'Maserati', 'Mg',
        'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Premier', 'Renault', 'Skoda',
        'Tata', 'Toyota', 'Volkswagen', 'Volvo'
      ];
    } else if (selectedValue === 'Body_Type') {
      newOptions = [
        'Convertible', 'Coupe', 'Coupe, Convertible', 'Crossover', 'Crossover, SUV',
        'Hatchback', 'MPV', 'MUV', 'Pick-up', 'SUV', 'SUV, Crossover', 'Sedan',
        'Sedan, Coupe', 'Sedan, Crossover', 'Sports', 'Sports, Convertible', 'Sports, Hatchback'
      ];
    } else if (selectedValue === 'Type') {
      newOptions = ['AMT', 'Automatic', 'CVT', 'DCT', 'Manual'];
    }

    setOptions(newOptions);
    setSelectedColumn(selectedValue);
  };

  const handleSubmit = async () => {
    const payload = {
      column: selectedColumn,
      operator: "equals",
      value: selectedValue
    };

    try {
      const response = await fetch(host + '/api/v1/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      updateCars(data)
    } catch (error) {
      console.error('Error in API call:', error);
    }
  };

  return (
    <div className="filters h-[640px] w-[15%] mr-2 ml-4 bg-[#003951] border border-0 rounded-lg mt-8">
      <div className="flex flex-col h-[40%] justify-between w-[80%] mt-10 ml-6">
        <h1 className="text-2xl text-white text-center font-bold">Filters</h1>
        <select onChange={handleFirstSelectChange} className="">
          <option value="">Select a column</option>
          <option value="Make">Make</option>
          <option value="Type">Type</option>
          <option value="Body_Type">Body</option>
        </select>

        <select onChange={(e) => setSelectedOperator(e.target.value)} className="">
          <option value="equals">Equals</option>
        </select>

        <select onChange={(e) => setSelectedValue(e.target.value)} className="">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          className="w-[50%] bg-blue-800 text-white px-1 py-1 font-sm rounded-lg text-center ml-9 shadow-md shadow-blue-500/40 hover:shadow-blue-500/80"
          onClick={handleSubmit}
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default Filters;
