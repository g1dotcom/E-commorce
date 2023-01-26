import React from "react";
import { MdPlace, MdPhone, MdOutlineMessage } from "react-icons/md";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGoogle,
} from "react-icons/bs";
import Apple from "../../assets/images/apple.png";
import Lg from "../../assets/images/lg.png";
import Samsung from "../../assets/images/samsung.png";
import Xiaomi from "../../assets/images/xiaomi.png";
import Sony from "../../assets/images/huawei.png";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around h-64 w-full bottom-0 mb-0 pb-0 ">
      <div className="flex flex-col items-center justify-center w-1/4 text-gray-300 bg-slate-800  ">
        <h1 className="bg-white text-gray-800 text-2xl font-bold rounded-xl ">
          Phone
          <span className="bg-slate-800 text-2xl text-white font-bold rounded-xl">
            Hub
          </span>
        </h1>
        <p className="text-xl mx-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cum
          tempora maxime pariatur quo. Doloribus odit, facilis aliquid quod,
          cumque quidem temporibus eaque doloremque magni, placeat id accusamus
        </p>
      </div>

      <div className="bg-gray-700 w-1/4">
        <h1></h1>

        <div className="flex flex-row flex-wrap items-center justify-center">
          <img src={Lg} className="m-5 h-20" />
          <img src={Apple} className="m-5 h-20" />
          <img src={Sony} className="m-5 h-20" />
          <img src={Samsung} className="m-5 h-20" />
          <img src={Xiaomi} className="m-5 h-20" />
        </div>
      </div>
      <div className="bg-slate-800 text-xl font-bold  text-gray-200 w-1/4 flex flex-col flex-wrap justify-around items-center ">
        <li className="my-5">
          <BsFacebook size={30} /> <h1>Facebook</h1>
        </li>
        <li className="my-5">
          <BsInstagram size={30} />
          <h1>Instagram</h1>
        </li>
        <li className="my-5">
          <BsTwitter size={30} />
          <h1>Twitter</h1>
        </li>
        <li className="my-5">
          <BsYoutube size={30} />
          <h1>Youtube</h1>
        </li>
        <li className="my-5">
          <BsLinkedin size={30} />
          <h1>Linkedin</h1>
        </li>
        <li className="my-5">
          <BsGoogle size={30} />
          <h1>Google</h1>
        </li>
      </div>
      <div className="bg-slate-700 text-xl font-bold text-gray-200 w-1/4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-mono"> Useful Links </h1>
        <ul className="">
          <li className="my-5  flex justify-around  ">
            <MdPlace size={30} /> Turkey/İzmir Karşıyaka
          </li>
          <li className="my-5 flex justify-around">
            <MdPhone size={30} />
            -09 563 589 52 58
          </li>
          <li className="my-5 flex justify-around">
            <MdOutlineMessage size={30} /> Thegkhnsl@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
