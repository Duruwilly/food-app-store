import { useEffect } from 'react'
import { BsHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { Button } from './Button'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from "../redux/cartSlice";
import { fetchData, sendCartData } from '../redux/cartDb';
import { savedItem } from '../redux/savedSlice';

const MenuListing = ({menu, id}) => {
  const {imgUrls, name, description, price} = menu
  const auth = getAuth();
  const dispatch = useDispatch();

   let total = 0;
   const cartItems = useSelector((state) => state.cart.cartItems);

   cartItems.forEach((item) => {
     total += item.quantity * item.price;
   });

 
  const addToCart = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addItem({imgUrls, name, description, price, id}))
        toast.success("Item added to cart");
      } else if (!user) {
        toast.info("Please signup or log in")
        return;
      }
    });
  };

  const addToLike = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(savedItem({imgUrls, name, description, price, id}))
        toast.success("Item added to your wishlist");
      } else if (!user) {
        toast.info("Please signup or log in");
        return;
      }
    });
  };

  /* const addCart = async () => {
    

    try {
      await addDoc(collection(db, "carts"), cartItem)
    } catch (error) {
      toast.error("An error occured")
    }
    dispatch(addItem({...menu, id}))
    toast.success("Item added to cart", { toastId: "r34-xAcu9#@(*" });
  } */
  

  return (
    <div className="" key={id}>
      <div className="box">
        <div className="images">
          <img src={imgUrls} alt="" className="shop-item-image" />
          <div className="faHeart">
            <button className="heart-btn" onClick={addToLike}>
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
          <h3 className="shop-item-title">{name}</h3>
          <p className="shop-item-desc">{description}</p>
          <button
            type="button"
            className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-black hover:tracking-widest text-white py-3 px-9 rounded-md text-3xl font-bold mt-4" onClick={addToCart} 
          >
            add to cart
          </button>
          <span className="shop-item-price">
            ₦{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuListing