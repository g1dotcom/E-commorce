import React from "react";

import { NavLink } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        shortDesc: item.shortDesc,
      })
    );
    toast.success(" product added successfully");
  };
  return (
    <div className="flex flex-col hover:scale-90 transition-all  items-center cursor-pointer m-4 my-10 ">
      <Link to="/shop/id">
        <img src={item.imgUrl} className="h-80 w-38" />
      </Link>

      <h3 className="font-bold text-2xl">
        <NavLink className="text-2xl  " to="/shop/id">
          {item.productName}
        </NavLink>
      </h3>
      <div className="flex flex-col flex-wrap">
        <p className="flex flex-row items-center">
          {item.description.substring(0, 60)}
        </p>
      </div>
      <div className="flex flex-row w-3/6 my-6  justify-between w-full ">
        <span className="text-4xl font-bold text-orange-800">
          ${item.price}
        </span>
        <span className="text-2xl font-bold hover:scale-90 text-orange-400">
          <MdAddCircle size={40} onClick={addToCart} />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
