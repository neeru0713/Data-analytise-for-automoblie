import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const NavBar = ({ user, showCreateButton = true }) => {
  return (
    <div className="navbar h-[3.5rem] bg-slate-400 flex items-center justify-between">
      <Link to="/">
        <div className="text-[40px] ml-2">
          <TbBrandGoogleAnalytics />
        </div>
      </Link>
      
        <div className="buttons mr-[32rem] flex w-[34%] justify-between">
          <Button text="Bar Chart" path="/analytics/Bar" />
          <Button text="Pie Chart" path="/analytics/Pie" />
          <Button text="Explore Cars" path="/cars" />
          <Button text="Register" path="/register" />
          <Button text="Login" path="/login" />
        </div>
       
    </div>
  );
};

export default NavBar;
