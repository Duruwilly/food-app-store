import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SavedItem from "../components/SavedItem";
import Title from "../components/Title";
import { useSelector, useDispatch } from "react-redux";
import Headers from "../components/Headers";
import { Button } from "../components/Button";
import { clearOrder } from "../redux/orderSlice";

const Order = () => {
  const { orderItems, totalAmount } = useSelector((state) => state.order);
  const auth = getAuth();

  const dispatch = useDispatch()
  return (
    <div className="">
      <Headers title="saved items" />
      {orderItems?.length !== 0 ? (
        <section className=" pb-24">
          <main className="">
            <div className="box-container">
              {orderItems?.map((ordered) => (
                <div className="group relative" key={ordered.id}>
                  <SavedItem {...ordered} imgUrls={ordered.imgUrls} />
                </div>
              ))}
            </div>
          </main>
          <Button title='clear cart' onClick={dispatch(clearOrder())} />
        </section>
      ) : (
        <div className="flex justify-center align-center mt-24">
          <h1 className="font-medium title-font mb-2 text-gray-900">
            You Have no saved items
          </h1>
        </div>
      )}
    </div>
  );
};

export default Order;
