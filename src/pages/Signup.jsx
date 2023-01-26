import React from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.prevenDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {}
  };

  return (
    <Helmet title="Signup">
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-gray-900 text-white w-2/3  my-36  flex flex-col justify-center items-center text-2xl font-serif rounded-xl ">
          <h1 className="font-bold ">SİGNUP</h1>
          <form onSubmit={signup}>
            <form className="">
              <label>Username:</label> <br />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-300  w-96 py-1 rounded-md font-medium text-xl text-gray-800"
              />
            </form>
            <form className="my-10  ">
              <label>Email:</label> <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-300  w-96 py-1 rounded-md font-medium text-xl text-gray-800"
              />
            </form>
            <form>
              <label>Password:</label> <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-300 w-96 py-1 rounded-md font-medium text-xl text-gray-800"
              />
            </form>
            <form className="mt-5">
              <label>File:</label> <br />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className=" py-1 w-96  font-medium text-xl text-white"
              />
            </form>

            <button
              className="bg-white  mr-10 text-black hover:bg-blue-500 text-1xl   rounded-xl px-12 py mt-10"
              type="submit"
            >
              Crreate an Acount
            </button>
          </form>
          <h1 className="text-xl font-medium mt-2">
            Already have an account?
            <span className="text-gray-300 ml-3">
              <Link to="/login">Login</Link>
            </span>
          </h1>
        </div>
      </div>
    </Helmet>
  );
};

export default Signup;
