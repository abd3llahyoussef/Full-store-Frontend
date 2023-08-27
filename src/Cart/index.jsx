import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import imgc from "../assets/img/banner.jpg";
import up from "../assets/img/up-arrow.svg";
import down from "../assets/img/down-arrow.svg";
import { minusOne } from "../storeSlice";
import { toast } from "react-toastify";

export default function Cart() {
  const cartItems = useSelector((state) => state.products.purchasedProducts);
  const newCartItems = cartItems.map((obj) => ({
    ...obj,
    quantity: 1,
  }));
  const dispatch = useDispatch();
  const [cart, setCart] = useState([...newCartItems]);
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCart([...cart]);
  };

  const handleDecrease = (item) => {
    item.quantity -= 1;
    setCart(...cart);
    const carting = cart.filter((item) => item.quantity > 0);
    if (item.quantity === 0) {
      dispatch(minusOne());
    }
    setCart([...carting]);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkOut = (e) => {
    e.preventDefault();
    toast.success("Your Order Saved Successfully", {
      position: "top-center",
    });
  };
  return (
    <React.Fragment>
      <div className="menu w-92 h-auto">
        <div>
          <ul className="list-none grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-x-14 gap-y-4 w-1/2 h-72 menu-img">
            {cart.map((item, key) => (
              <li key={item.id} className="inline">
                <div className="flex font-sans">
                  <div className="flex-none w-48 relative">
                    <img
                      src={imgc}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-l-2xl"
                      loading="lazy"
                    />
                  </div>
                  <form className="flex-auto p-6 bg-white rounded-r-2xl w-64">
                    <div className="flex flex-wrap">
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {item.name}
                      </h1>
                      <div className="text-lg font-semibold text-slate-500">
                        ${item.price}
                      </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                      <div className="flex-auto justify-items-end space-x-4 grid grid-cols-1 ">
                        <button
                          className="h-7 w-12 mt-2 px-2 ml-4"
                          type="button"
                          onClick={() => {
                            handleIncrease(item);
                          }}
                        >
                          <img src={up} alt="up arrow" />
                        </button>
                        <span className="text-black text-lg cartQuant">
                          {item.quantity}
                        </span>
                        <button
                          className="h-7 w-12 mb-2 px-2"
                          type="button"
                          onClick={() => {
                            handleDecrease(item);
                          }}
                        >
                          <img src={down} alt="down arrow" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            ))}
            <hr className="bg-white" />
            <div className="flex-auto space-x-4 grid grid-cols-2">
              <p className="text-2xlg pl-8">Total Price</p>
              <p className="text-2xlg pl-40">${totalPrice}</p>
            </div>
            <button className="btn vvd" type="submit" onClick={checkOut}>
              <span>Check Out</span>
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
