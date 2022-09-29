import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { sendCartData } from "../redux/cartDb";
import { db } from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Headers from '../components/Headers';
import { clearCart, onCheckoutQuantity } from '../redux/cartSlice';
import { Spinner } from '../components/Spinner';

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
 const [formData, setFormData] = useState({
   state: "",
   address: "",
 });

 const { userName, email, mobileNumber } = useSelector((state) => state.user.userInfo)
 let total = 0;
 const cartItems = useSelector((state) => state.cart.cartItems);
 
 cartItems.forEach((item) => {
   total += item.quantity * item.price;
 });

 let totalAmount = 1500 + total;

 const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

 const config = {
   public_key: "FLWPUBK_TEST-28d31a3f2d497acd1db99c1595aaf9e2-X",
   tx_ref: Date.now(),
   amount: totalAmount,
   currency: "NGN",
   payment_options: "card,banktransfer,ussd",
   customer: {
     email: email,
     phone_number: mobileNumber,
     name: userName,
   },
 };

 const handleFlutterPayment = useFlutterwave(config);

 const auth = getAuth();
 
 const addItemToDb = async () => {
   const orderItem = {
     ...cartItems,
     totalAmount,
     userName,
     email,
     mobileNumber,
     address,
     state,
     cartRef: auth.currentUser.uid,
     timestamp: serverTimestamp(),
   };

   try {
     await addDoc(collection(db, "carts"), orderItem);
   } catch (error) {
     console.log(error);
   }
 };

 const { state, address } = formData

 const inputStyle =
   "appearance-none rounded-lg relative block w-full px-3 py-4 border border-gray-300 focus:outline-none placeholder:text-2xl text-3xl md:text-2xl focus:border-input-border";


   setTimeout(() => {
     setLoading(false);
   }, 2500);

   if (loading) return <Spinner description="Lfoods" />;

  return (
    <div>
      <Headers title="checkout" />
      <div className="cart-padding">
        <form className="space-y-4">
          <input
            id="userName"
            type="text"
            value={userName}
            className={inputStyle}
            disabled
          />
          <input
            id="email"
            type="text"
            value={email}
            className={inputStyle}
            disabled
          />
          <input
            id="mobileNumber"
            type="text"
            value={mobileNumber}
            className={inputStyle}
            disabled
          />
          <input
            type="text"
            id='address'
            value={address}
            placeholder="Enter address"
            required
            className={inputStyle}
            onChange={onChange}
          />
          <input
            type="text"
            id='state'
            value={state}
            placeholder="Enter state eg. Lagos state"
            className={inputStyle}
            required
            onChange={onChange}
          />
          <div className="flex justify-between items-center text-3xl">
            <p>Subtotal</p>
            <p>
              ₦ ({[total].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
            </p>
          </div>
          <div className="flex justify-between items-center border-b border-b-gray-300 text-3xl pb-4">
            <p>Delivery Fee</p>
            <p>
              ₦ ({`${1500}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
            </p>
          </div>
          <div className="flex justify-between items-center text-3xl">
            <p>Total</p>
            <p className="text-primary">
              ₦ (
              {[totalAmount].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              )
            </p>
          </div>
          <button
            type="button"
            className="bg-primary w-full text-center p-6 text-3xl text-white rounded-lg outline-none border-none capitalize"
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal();
                },
              });
              sendCartData({cartItems, totalAmount, userName, email, mobileNumber, address, state});
              addItemToDb();
              dispatch(clearCart())
              dispatch(onCheckoutQuantity())
            }}
          >
            confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout