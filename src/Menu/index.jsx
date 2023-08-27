import React from "react";
import { useState, useEffect } from "react";
import imgc from "../assets/img/banner.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./../storeSlice";
import { addOne, setProduct, setCount } from "./../storeSlice";

export default function Menu() {
  const [view, setView] = useState([]);
  const [myCart, setMyCart] = useState([]);

  const dispatch = useDispatch();
  const Items = useSelector((state) => state.products.store);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(setCount());
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setProduct(myCart));
  }, [dispatch, myCart]);

  const addToCart = (item) => {
    dispatch(addOne());
    setMyCart([...myCart, item]);
  };

  useEffect(() => {
    setView([...Items]);
  }, [Items]);

  const getSpecific = async (e) => {
    const products = [...Items];
    const value = e.target.value;
    if (value === "Choose the category") {
      setView(products);
    } else {
      const prods = products.filter((prod) => prod.category === value);
      setView(prods);
    }
  };

  const itemData = [...view];

  return (
    <React.Fragment>
      <div className="menu w-92 h-auto">
        {error !== null ? <h1>{error}</h1> : null}

        <div className="pl-30 mt-20 mb-20">
          <select
            className="flex rounded-2xl bg-slate-200 w-1/3 h-18 text-black ml-10 selection"
            onChange={getSpecific}
          >
            <option
              value="Choose the category"
              defaultValue={"Choose the category"}
            >
              Choose the category
            </option>
            <option value="burgers">burgers</option>
            <option value="fries">fries</option>
            <option value="drinks">drinks</option>
          </select>
        </div>
        <div>
          <ul className="list-none grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-14 gap-y-4 w-1/2 h-72 menu-img">
            {isLoading ? (
              <div className="justify-items-stretch w-full">
                <div class="jelly-triangle">
                  <div class="jelly-triangle__dot"></div>
                  <div class="jelly-triangle__traveler"></div>
                </div>

                <svg width="0" height="0" class="jelly-maker">
                  <defs>
                    <filter id="uib-jelly-triangle-ooze">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="7.3"
                        result="blur"
                      ></feGaussianBlur>
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="ooze"
                      ></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="ooze"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            ) : (
              itemData.map((item, key) => (
                <li key={item.id} className="inline w-48">
                  <div className="flex font-sans">
                    <div className="flex-none w-48 relative">
                      <img
                        src={imgc}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-l-2xl"
                        loading="lazy"
                      />
                    </div>
                    <form className="flex-auto p-6 bg-white rounded-r-2xl">
                      <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                          {item.name}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                          ${item.price}
                        </div>
                      </div>
                      <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                          <button
                            className="h-14 w-24 mt-2 px-2 font-semibold rounded-3xl menu-btn text-slate-900"
                            type="button"
                            onClick={() => {
                              addToCart(item);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
