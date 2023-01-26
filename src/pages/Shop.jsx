import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import Helmet from "../components/Helmet/Helmet";

const Shop = () => {
  const [data, setData] = useState(products);
  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(searchedProducts);
  };

  return (
    <Helmet title={"Shop"}>
      <CommonSection title={"Products"} />
      <div className="my-20">
        <div className="h-10 flex flex-row justify-around ">
          <button
            onClick={() => filterResult("mobile")}
            className="bg-gray-800 text-white font-sans font-bold text-2xl items-center px-32 py-8 ring-2 ring-orange-200 rounded-2xl ml-32 flex tracking-widest "
          >
            MOBİLE
          </button>
          <button
            onClick={() => filterResult("tv")}
            className="bg-gray-800 text-white font-sans font-bold text-2xl items-center px-32 py-8 ring-2 ring-orange-200 rounded-2xl ml-32 flex tracking-widest"
          >
            TV
          </button>
          <button
            onClick={() => filterResult("headphone")}
            className="bg-gray-800 text-white font-sans font-bold text-2xl items-center px-32 py-8 ring-2 ring-orange-200 rounded-2xl ml-32 flex tracking-widest"
          >
            HEADPHONE
          </button>
          <input
            onChange={handleSearch}
            className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 bg-slate-300 rounded-3xl px-48 py-8 tracking-widest"
            type="text"
            placeholder="Search......."
          ></input>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-4xl flex justify-center my-20">
            List of Products
          </h1>
          <section>
            <ProductsList data={data} />
          </section>
        </div>
      </div>
    </Helmet>
  );
};

export default Shop;
