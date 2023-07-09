const express = require('express');
const cors = require('cors');
const Car = require('./models/Car');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require('cookie-parser');
const port = 8080;

const dbUrl = 'mongodb://localhost:27017/autodata';

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/v1/make', (req, res) => {

    Car.distinct('Type')
  .then((makes) => {
    console.log('Unique make values:', makes);
    res.json({data: makes})
  })
  .catch((error) => {
    console.error('Error fetching unique make values:', error);
  });

  
    
  });


  // Endpoint to fetch potential revenue
app.get('/api/v1/revenue', async (req, res) => {
  try {
    const result = await Car.aggregate([
      {
        $addFields: {
          numericExShowroomPrice: {
            $toDouble: {
              $replaceAll: {
                input: {
                  $replaceAll: {
                    input: '$ExShowroom_Price',
                    find: ',',
                    replacement: '',
                  },
                },
                find: 'Rs. ',
                replacement: '',
              },
            },
          },
        },
      },
      {
        $group: {
          _id: '$Make',
          potentialRevenue: { $sum: '$numericExShowroomPrice' },
        },
      },
      {
        $project: {
          _id: 0,
          make: '$_id',
          potentialRevenue: 1,
        },
      },
    ]);
    
    res.json({ data: result });
  } catch (error) {
    console.error('Error fetching potential revenue:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch distribution of cars by body type
app.get('/api/v1/distribution', async (req, res) => {
  try {
    const result = await Car.aggregate([
      {
        $group: {
          _id: '$Body_Type',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          bodyType: '$_id',
          count: 1,
        },
      },
    ]);
    res.json({ data: result });
  } catch (error) {
    console.error('Error fetching distribution of cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/v1/cars', async function (req, res) {
  try {
    const carData = await Car.find({}, {
      Make: 1,
      Model: 1,
      Variant: 1,
      Displacement: 1,
      Type: 1,
ExShowroom_Price: 1,
Fuel_Tank_Capacity: 1,
      Fuel_Type: 1,
      Body_Type: 1,
      City_Mileage: 1,
      ARAI_Certified_Mileage: 1
    });

    res.status(200).json(carData);
  } catch (error) {
    console.error('Error fetching car data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/v1/cars', async function (req, res) {
  try {
    const { column, operator, value } = req.body;
    const filters = {};
   
    // Construct the filter object based on the received parameters
    if (column && operator && value) {
      switch (operator) {
        case 'equals':
          filters[column] = value;
          break;
        case 'greaterThan':
          filters[column] = { $gt: value };
          break;
        case 'lessThan':
          filters[column] = { $lt: value };
          break;
        default:
          return res.status(400).json({ message: 'Invalid operator' });
      }
    }

    const carData = await Car.find(filters, {
      Make: 1,
      Model: 1,
      Variant: 1,
      Displacement: 1,
      Type: 1,
      ExShowroom_Price: 1,
      Fuel_Tank_Capacity: 1,
      Fuel_Type: 1,
      Body_Type: 1,
      City_Mileage: 1,
      ARAI_Certified_Mileage: 1
    });

    res.status(200).json(carData);
  } catch (error) {
    console.error('Error fetching car data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.use("/api/v1/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
