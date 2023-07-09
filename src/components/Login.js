import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "./Button";

const Login = ({ user, updateUser }) => {
  // State variables for storing form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic with email and password
    // You can make an API call or handle the registration logic here
    console.log("handlesubmit called in login page");
    fetch("http://127.0.0.1:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Registration failed");
        }
      })
      .then((data) => {
        console.log("Registration successful:", data);
        // Handle successful registration
        document.cookie = `token=${JSON.stringify(data.existingUser)}`;
        localStorage.setItem('user', JSON.stringify(data.existingUser));
        updateUser(data.existingUser);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Handle registration error
      });

    console.log("Registering user:", email, password);
    // Reset form inputs after registration
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <NavBar user={user} />
      <div className="mt-20 text-center">
        <h1 className="text-5xl ">Login Page</h1>
        <div
          className="border border-blue-400 shadow-lg bg-[#C0D6E4] shadow-blue-500/40 hover:shadow-blue-500/80 flex flex-col mt-10 w-[27%] text-center ml-[36%] p-10 rounded-lg "
          onSubmit={handleSubmit}
        >
          <input
            className="font-semibold h-10 text-lg border border-blue-800 rounded-lg mb-6 pl-4"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="font-semibold h-10 text-lg border border-blue-800 rounded-lg pl-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handleSubmit} className="mt-10">
            <Button text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
