import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSign, setInSign] = useState(true);

  const handleSignIN = () => {
    setInSign(!IsSign);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="body"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 rounded-md text-white bg-opacity-70">
        <p className="text-2xl mb-3">{IsSign ? "Sign In" : "Sign Up"}</p>
        {!IsSign && (
          <input
            type="Name"
            placeholder="Full Name"
            className="p-4 my-3 w-full rounded-md bg-gray-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-3 w-full rounded-md bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded-md bg-gray-500"
        />
        <button className="p-4 my-3 w-full bg-red-800 rounded-md">
          {IsSign ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignIN} className="cursor-pointer">
          {" "}
          {IsSign ? "New to netflix? Sign up now" : "Already Registed"}
        </p>
      </form>
    </div>
  );
};

export default Login;
