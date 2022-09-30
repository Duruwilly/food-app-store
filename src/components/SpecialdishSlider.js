import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SpecialMeal } from "./Navmenu";
import { Button } from "./Button";
import { addItem } from "../redux/cartSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const SpecialDishSlider = ({ special, id, img }) => {
  const { name, description, imgUrls, price } = special;

  const auth = getAuth();
  const dispatch = useDispatch();

  const addToCart = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addItem({ imgUrls, name, description, price, id }));
        toast.success("Item added to cart");
      } else if (!user) {
        toast.info("Please signup or log in");
        return;
      }
    });
  };

  return (
    <div className="slide">
      <div className="content">
        <span>This month special dish</span>
        <h3>{name}</h3>
        <p className='desc'>{description}</p>
        <p className="text-primary text-[2.5rem] py-2">
          ₦{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <button
          type="button"
          className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-black hover:tracking-widest text-white py-3 px-9 rounded-md text-3xl font-bold mt-4"
          onClick={addToCart}
        >
          Order Now
        </button>
      </div>
      <div className="image">
        <img src={imgUrls} alt={name} />
      </div>
    </div>
  );
};

export default SpecialDishSlider;
