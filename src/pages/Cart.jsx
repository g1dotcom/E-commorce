import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { MdDelete } from "react-icons/md";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet>
      <CommonSection title="Shoping Cart" />
      <div className="flex flex-row justify-around  items-center bg-gray-200 text-gray-600 ">
        <h1 className="ml-96  font-serif text-2xl">IMAGE</h1>

        <h1 className="ml-60 font-serif text-2xl"> NAME</h1>
        <h1 className="ml-96 font-serif text-2xl"> PRICE</h1>
        <h1 className=" ml-96 font-serif text-2xl"> DELETE</h1>

        <span className="font-bold text-4xl text-gray-500 mt-24 my-10"></span>
      </div>

      <div className="">
        {cartItems.map((item, index) => (
          <Tr item={item} key={index} />
        ))}
      </div>
      <div className="flex flex-col bg-gray-300 w-full  mr-12 justify-center items-end ">
        <h1 className="font-sans font-bold text-6xl text-gray-500 mr-20 ">
          {" "}
          Subtotal
        </h1>
        <span className="font-sans font-bold text-6xl text-gray-800 mr-20">
          ${totalAmount}
        </span>
        <button className="bg-sky-900  mr-10 text-white hover:bg-blue-500 text-4xl px-20 py-10 rounded-xl my-10">
          <Link to="/checkout">checkout</Link>
        </button>
      </div>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="flex flex-row justify-around items-center ">
      <img className="w-96 " src={item.imgUrl}></img>
      <div>
        <h1 className="font-sans text-4xl font-bold my-10">
          {item.productName}
        </h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          delectus aut eligendi quos odit reiciendis, expedita maiores porro sed
          adipisci!
        </h4>
      </div>

      <span className="font-bold text-4xl text-orange-800 mt-24 my-10">
        ${item.price}
      </span>

      <MdDelete
        onClick={deleteProduct}
        size={50}
        className="hover:scale-90 cursor-pointer"
      />
    </div>
  );
};

export default Cart;
