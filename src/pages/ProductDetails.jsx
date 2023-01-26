import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => (item.id = id));
  const { imgUrl, productName, price, shortDesc, description, category } =
    product;
  const relatedProducts = products.filter((item) => (item.category = category));
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };
  useEffect(() => {
    window.scrollTo(0, 390);
  }, [product]);
  return (
    <div>
      <Helmet title={productName} />
      <CommonSection title={productName} />
      <div className="flex justify-center items-center py-20 ">
        <div className="flex flex-row">
          <img className="w-64 mx-20 " src={imgUrl} alt="" />
        </div>
        <div className=" flex flew-row justify-start rounded-xl">
          <div>
            <h1 className="font-sans text-4xl font-bold my-10">
              {productName}
            </h1>
            <p className="text my-10 font-sans font-bold text-gray-600 ">
              {shortDesc}
            </p>
            <span className="font-bold text-4xl text-gray-500 mt-24 my-10">
              ${price}
            </span>
          </div>
          <button
            onClick={addToCart}
            className="bg-orange-600 text-white font-sans font-bold text-xl items-center px-24 py-4 ring-2 ring-orange-200 rounded-2xl ml-32 flex tracking-widest hover:scale-90 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mb-8  mx-12 text-gray-600 ">
        <div className="flex font-sans font-bold text-2xl">
          <h1>Description</h1> <h1 className="mx-10 text-black">Rewiev(1)</h1>
        </div>
        <p className="font-sans font-medium">{description}</p>
      </div>
      <ProductsList data={relatedProducts} />
    </div>
  );
};

export default ProductDetails;
