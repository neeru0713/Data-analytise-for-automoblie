
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react"
import './App.css';
import NavBar from './components/NavBar';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from "./components/HomePage";
import ExploreCars from "./components/ExploreCars";

function App() {
  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user);
  }
  return (
    <div className="flex flex-col">

      <Router>
        <Routes>
        <Route path="/" element={<HomePage user={user} />} />
          <Route
            path="/register"
            element={<Register user={user}  />}
          />
          <Route
            path="/login"
            element={<Login user={user}  />}
          />
          <Route
            path="/analytics/Bar"
            element={<BarChart />}
          />
          <Route path="/analytics/Pie" element={<PieChart />} />

          <Route
            path="/cars"
            element={<ExploreCars />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
