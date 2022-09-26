import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { removeSavedItem } from "../redux/savedSlice";
import { addItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function SavedItem({ name, description, price, imgUrls, id, userRef, timestamp }) {

  const auth = getAuth();
  const dispatch = useDispatch();

  const addToCart = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addItem({ name, description, price, imgUrls, userRef, timestamp, id }));
        toast.success("Item added to cart");
      } else if (!user) {
        toast.info("Please signup or log in");
        return;
      }
    });
  };

  return (
    <div key={id}>
      <div className="bg-white">
          <div className="flex justify-center gap-x-14 border-b border-b-gray-300">
            <div className="flex-[2] p-6">
              <img src={imgUrls} alt={name} />
            </div>
            <div className="flex-[4] p-6">
              <p className="gray-700">{name}</p>
              <p>{description}</p>
              <span className="font-bold text-4xl mt-3">
                ₦{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center p-6">
            <span
              className="flex items-center justify-center gap-4 cursor-pointer text-primary text-4xl"
              onClick={() => {
                dispatch(removeSavedItem(id));
              }}
            >
              <FaTrash />
            </span>
            <p className="bg-primary px-8 py-3 text-white capitalize text-2xl cursor-pointer rounded-lg" onClick={addToCart}>
              buy now
            </p>
          </div>
        </div>
      </div>
  );
}

export default SavedItem;
