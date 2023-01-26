import React from "react";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="CHECKOUT" />
      <div className="flex flex-row justify-around my-36">
        <div className=" text-2xl min-w-[500px] text-white font-mono font-bold flex flex-col items-center justify-center ml-20 bg-gray-900 p-8 px-8 rounded-lg">
          <form className="">
            <label>Enter your email:</label> <br />
            <input
              type="text"
              name="Enter your email"
              className="rounded-lg  bg-gray-500 my-4 p-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </form>
          <form>
            <label>Phone number: </label> <br />
            <input
              type="text"
              name="Phone number"
              className="rounded-lg bg-gray-500 my-4 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </form>
          <form>
            <label>Street address: </label> <br />
            <input
              type="text"
              name="Street address"
              className="rounded-lg bg-gray-500 my-4 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </form>
          <form>
            <label>City: </label> <br />
            <input
              type="text"
              name="City"
              className="rounded-lg bg-gray-500 my-4 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </form>
        </div>
        <div className="bg-sky-900 w-1/5 flex flex-col items-center ">
          <div className="flex flex-row justify-around ">
            <div className="text-white text-2xl font-medium font-serif">
              <h1 className="my-5">Total Qty:</h1>
              <h1 className="my-5">Subtotal:</h1>
              <h1 className="my-5">
                Shipping<span className="text-green-500">(free shipping)</span>:
              </h1>
              <hr />
              <h1 className="my-10 text-gray-400">Total Cost</h1>
            </div>
            <div className="text-white text-2xl font-medium font-serif">
              <h1 className="my-5">{totalQty}</h1>
              <h1 className="my-5">{totalAmount}</h1>
              <h1 className="my-5">0</h1>
              <hr />
              <h1 className="my-10 text-gray-400">{totalAmount}</h1>
            </div>
          </div>
          <button className="bg-gray-200 rounded-2xl w-3/4 h-10 flex justify-center items-center text-xl font-mono font-bold hover:scale-90 transition-all">
            Place an Order
          </button>
        </div>
      </div>
    </Helmet>
  );
};

export default Checkout;
