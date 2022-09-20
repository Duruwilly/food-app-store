import React from 'react'
import { BsHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { Button } from './Button'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from 'react-toastify'

const MenuListing = ({menu, id}) => {
  const auth = getAuth();
  const addToFavourite = async (favourite) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addItem();
        toast.success("Item added to favourite", { toastId: "r34-xAcu9#@(*" });
      } else if (!user) {
        toast.info("Please signup or log in", { toastId: "r34-xAcu9#@(*" });
        return;
      }
    });
    const addItem = async () => {
      const favouriteItem = {
        ...menu,
        favouriteRef: auth.currentUser.uid,
        timestamp: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "favourites"), favouriteItem);
      } catch (error) {
        toast.error("An error occured");
      }
    };
  };

  const addToCart = async (cart) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addItemToCart();
        toast.success("Item added to cart", { toastId: "r34-xAcu9#@(*" });
      } else if (!user) {
        toast.info("Please signup or log in", { toastId: "r34-xAcu9#@(*" });
        return;
      }
    });
    const addItemToCart = async () => {
      const cartItem = {
        ...menu,
        cartRef: auth.currentUser.uid,
        timestamp: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "carts"), cartItem);
      } catch (error) {
        toast.error("An error occured");
      }
    };
  };

  return (
    <div className="" key={id}>
      <div className="box">
        <div className="images">
          <img src={menu.imgUrls} alt="" className="shop-item-image" />
          <div className="faHeart">
            <button className="heart-btn" onClick={addToFavourite}>
              <BsHeartFill />
            </button>
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <BsFillStarFill className="star" />
            <BsFillStarFill className="star" />
            <BsFillStarFill className="star" />
            <BsFillStarFill className="star" />
            <BsStarHalf className="star" />
          </div>
          <h3 className="shop-item-title">{menu.name}</h3>
          <p className="shop-item-desc">{menu.description}</p>
          <button
            type="button"
            className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-black hover:tracking-widest text-white py-3 px-9 rounded-md text-3xl font-bold mt-4" onClick={addToCart}
          >
            add to cart
          </button>
          <span className="shop-item-price">
            ₦{[menu.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuListing