import { BsFillLightbulbFill, BsBasket, BsLightbulb } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const navigateToCart = () => {
    navigate("/cart");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        menuRef.current.classList.add("sticky_header");
      } else {
        menuRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "gray";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);
  return (
    <header className="header  " ref={menuRef}>
      <div className="header  sm:flex sm:flex-row flex flex-col items-center justify-between px-3 h-28   ">
        <NavLink to="home">
          <div className="text-4xl  bg-gray-800 rounded-2xl font-bold tracking-wider text-white ">
            Phone<span className="text-gray-800 bg-white rounded-2xl">Hub</span>
          </div>
        </NavLink>

        <div>
          <ul className="flex justify-center items-center font-mono ">
            <li className="px-10 font-bold  tracking-wider hover:bg-orange-100  ">
              <NavLink className="text-2xl  text-gray-800 " to="home">
                Home
              </NavLink>
            </li>
            <li className="px-10 tracking-wider font-bold hover:bg-orange-100">
              <NavLink className="text-2xl text-gray-800" to="shop">
                Shop
              </NavLink>
            </li>
            <li className="px-10 tracking-wider font-bold hover:bg-orange-100  ">
              <NavLink className="text-2xl text-gray-800 " to="cart">
                Cart
              </NavLink>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input
            className="border p-3 outline-none rounded-lg h-5 sm:h-10 "
            type="text"
            placeholder="search"
            BsLightbulb
          />
          <div className="flex flex-col items-center justify-center">
            {" "}
            <NavLink
              className="flex flex-col items-center justify-center"
              to="login"
            >
              <img
                className="cursor-pointer hover:scale-105 mx-1 "
                src={userIcon}
                alt=""
              />
              <h2 className="text-xl"> Logout</h2>
            </NavLink>
          </div>
          <div onClick={() => setColor(!color)}>
            {color ? (
              <BsFillLightbulbFill
                size={25}
                className="cursor-pointer hover:scale-105 mx-1"
              />
            ) : (
              <BsLightbulb
                size={25}
                className="cursor-pointer hover:scale-110 mx-1"
              />
            )}
          </div>
          <div className="relative ">
            <span onClick={navigateToCart}>
              <BsBasket size={25} className="cursor-pointer hover:scale-110" />
            </span>
            <span className="absolute -top-3 -right-2 px-1 bg-orange-600 text-white rounded-full text-sm">
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
