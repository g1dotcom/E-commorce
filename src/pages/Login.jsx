import React from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import Img1 from "../assets/images/login.jpg";

const Login = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = async () => {
    if (signUp) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/home";
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/home";
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Helmet title="Login">
      <div className=" grid grid-cols-1 sm:grid-cols-2  w-full ">
        <div className="  sm-block">
          <img src={Img1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-800 flex flex-col  justify-center">
          <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg ">
            <h2 className=" text-4xl text-white my-2">
              {signUp ? "REGISTER" : "LOGIN"}
            </h2>
            <input
              className="rounded-lg bg-gray-700 my-4 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              name="email"
              value={authData.email}
              onChange={onChangeFunc}
              type="email"
              placeholder="Email"
            />
            <input
              className="rounded-lg bg-gray-700 my-4 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              name="password"
              value={authData.password}
              onChange={onChangeFunc}
              type="password"
              placeholder="Password"
            />

            <p
              onClick={() => setSignUp(!signUp)}
              className=" text-lg text-gray-400 font-medium font-mono cursor-pointer"
            >
              {signUp ? " Have your already acount" : "Create an acount"}
            </p>
            <div
              className="w-full my-5 py-2 bg-teal-500 flex justify-center items-center shadow-lg shadow-teal-500/80 hover:shadow-teal-500/10 cursor-pointer text-white font-semibold rounded-lg font-mono hover:bg-teal-400 "
              onClick={authFunc}
            >
              {signUp ? "Register" : " Login"}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
