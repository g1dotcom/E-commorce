import React, { useEffect, useState } from "react";
import Backg from "../assets/images/bg.png";
import Apple from "../assets/images/apple.png";
import Lg from "../assets/images/lg.png";
import Samsung from "../assets/images/samsung.png";
import Xiaomi from "../assets/images/xiaomi.png";
import Sony from "../assets/images/huawei.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";

const Home = () => {
  const [data, setData] = useState(products);

  return (
    <Helmet title={"Home"}>
      <div className="    ">
        <div className="flex bg-gray-300">
          <div className="  h-80 w-1/2 flex flex-col items-center  ">
            <h3 className=" font-bold -ml-60 mt-16">
              The Best Of 2023 Are Before You
            </h3>
            <h1 className="my-8  text-4xl mt-10">
              Many Models Such As <br />
              <span className="font-bold  ">İphone,Samsung,Sony,Huawei...</span>
            </h1>
            <div className="flex mt-10">
              <img src={Lg} className="mr-5 h-20" />
              <img src={Apple} className="mr-5 h-20" />
              <img src={Sony} className="mr-5 h-20" />
              <img src={Samsung} className="mr-5 h-20" />
              <img src={Xiaomi} className="mr-5 h-20" />
            </div>
            <br />
            <h1 className="text-2xl -py-20">Merge with technology</h1>
          </div>

          <div className="h-1/2  w-1/2 flex flex-col justify-center items-center">
            <img src={Backg} className="h-auto" />
            <p className="text-2xl font-medium mb-10 ">
              The World İs At Your Fingertips.
            </p>
          </div>
        </div>

        <Services />

        <div className="flex flex-col">
          <h1 className="font-bold text-4xl flex justify-center">
            List of Products
          </h1>
          <ProductsList data={data} />
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
