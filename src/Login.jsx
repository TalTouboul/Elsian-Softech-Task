import React from "react";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full md:h-150 max-h-auto max-w-auto flex flex-col md:flex-row m-auto">
        
        {/* Left Side */}
        <div style={{ backgroundColor: "#3949AB" }} className="relative md:w-4/7 p-6 flex flex-col justify-center hidden md:block">
          <img
            src="src\assets\LOGO.png"
            alt="Logo"
            className="absolute start-3 top-3 m-2 size-10"
          />
          <div className="w-5/6 mx-auto place-items-center">
            <img
              src="src/assets/1.png"
              alt="Illustration"
              className="h-5/9 w-5/9 m-auto object-center mt-25"
            />

            <h2 className="text-xl">Welcome aboard my friend</h2>
            <p className="mt-1 text-xs opacity-90">
              Just a couple of clicks and we start
            </p>
          </div>

        </div>
          

        {/* Right Side */}
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
