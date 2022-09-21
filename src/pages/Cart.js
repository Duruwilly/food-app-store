import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const FavouriteList = ({ cartToggle }) => {
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchCartList = async () => {
      try {
        const docRef = collection(db, "carts");
        const q = query(
          docRef,
          where("cartRef", "==", auth.currentUser.uid),
          orderBy("timestamp", "desc"),
          limit(12)
        );
        const docSnap = await getDocs(q);
        const cartItems = [];
        docSnap.forEach((doc) => {
          return cartItems.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setCartList(cartItems);
        setLoading(false);
      } catch (error) {
        toast.error("unable to get cart items", { toastId: "YU$V%^^$TG" });
        navigate("/");
      }
    };
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchCartList();
        } else if (!user) {
          navigate("/login");
          toast.info(
            "Please log in",
            { toastId: "r34-xAcu9#@(*" },
            { autoClose: 10000 }
          );
          return;
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const deleteCart = async (cartId) => {
    try {
      await deleteDoc(doc(db, "carts", cartId));
      const updatedCartList = cartList.filter((cart) => cart.id !== cartId);
      setCartList(updatedCartList);
      toast.success("deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("error", { toastId: "#@#433szxdz#@23" });
    }
  };

  return (
    <div className="">
      <header className="profile text-white pt-40 pb-4 text-center text-4xl px-4">
        <p className="font-bold">Cart</p>
      </header>
      {cartList?.length !== 0 ? (
        <div className="mt- pb-24">
          <p className="uppercase text-gray-600 cart-padding">cart summary</p>
          <div className="bg-white">
            <div className="cart-padding">
              <p>Subtotal</p>
            </div>
          </div>
          <main className="cart-padding">
            <div className="box-container">
              {cartList?.map((cart) => (
                <div className="group relative" key={cart.id}>
                  <CartItem
                    cart={cart.data}
                    id={cart.id}
                    handleDelete={deleteCart}
                  />
                </div>
              ))}
            </div>
          </main>
          <div className="flex justify-cente items-center gap-2 bg-white py- cart-padding">  
            <div className="bg-gray p-6 text-3xl text-primary rounded-lg">
              <a href='tel:+2349019204780'>
                <BsFillTelephoneFill />
              </a>
            </div>
            
            <Link
              to="/checkout"
              className="bg-primary w-full text-center p-6 text-3xl text-white rounded-lg"
            >
              <div>Checkout</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center align-center mt-">
          <h1 className="font-medium title-font mb-2 text-gray-900">
            You Have no cart items
          </h1>
        </div>
      )}
    </div>
  );
};

export default FavouriteList;
