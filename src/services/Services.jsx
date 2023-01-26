import React from "react";
import {
  MdLocalShipping,
  MdOutlineAssignmentReturned,
  MdPayments,
  MdOutlineAttachMoney,
} from "react-icons/md";

const Services = () => {
  return (
    <div className="h-80  ">
      <div className=" sm:h-full   flex flex-col sm:flex-row items-center justify-around">
        <div
          className=" flex flex-col  items-center justify-center p-10 px-28 rounded-2xl 
                 hover:scale-95     bg-orange-300 "
        >
          <MdLocalShipping color="black" size={50} />
          <h1 className="font-bold text-2xl">Free Shipping</h1>
          <p className="font-medium">7/24 shipping service</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 px-28 rounded-2xl hover:scale-95    bg-gray-300  ">
          <MdOutlineAssignmentReturned size={50} />
          <h1 className="font-bold text-2xl">Easy Returns</h1>
          <p className="font-medium">return in 5 minutes</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 px-28 rounded-2xl  hover:scale-95 bg-orange-300 ">
          <MdPayments size={50} />
          <h1 className="font-bold text-2xl">Secure Payment</h1>
          <p className="font-medium">reliable shopping</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 px-28 rounded-2xl hover:scale-95 bg-gray-400   ">
          <MdOutlineAttachMoney size={50} />
          <h1 className="font-bold text-2xl">Back Guarantee</h1>
          <p className="font-medium">refund within 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
