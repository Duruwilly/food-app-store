import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Headers from "../components/Headers";
import { Spinner } from "../components/Spinner";

const Cart = () => {
  let total = 0;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.userInfo);

  cartItems.forEach((item) => {
    total += item.quantity * item.price;
  })
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2500);

  if(loading) return <Spinner description='loading...' />

  return (
    <div className="">
      <Headers title='cart'/>
      {cartItems?.length !== 0 ? (
        <div className="pb-24">
          <p className="uppercase text-gray-600 cart-padding text-2xl font-semibold">cart summary</p>
          <div className="bg-white">
            <div className="cart-padding flex justify-between text-3xl font-bold">
              <p>Subtotal</p>
              <p>
                ₦ ({[total].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
              </p>
            </div>
          </div>
          <main className="cart-padding">
            <div className="box-container">
              {cartItems?.map((cart) => (
                <div className="group relative" key={cart.id}>
                  <CartItem
                  {...cart}
                  img={cart.imgUrls}
                  />
                </div>
              ))}
            </div>
          </main>
          <div className="flex justify-cente items-center gap-2 bg-white py- cart-padding">
            <div className="bg-gray p-6 text-3xl text-primary rounded-lg">
              <a href="tel:+2349019204780">
                <BsFillTelephoneFill />
              </a>
            </div>

            <Link to='/checkout'
              className="bg-primary w-full text-center p-6 text-3xl text-white rounded-lg"
            >
                Checkout ₦ (
                {[total].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="font-medium title-font mb-2 text-gray-900 text-4xl pt-44">
            You Have no cart items
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
