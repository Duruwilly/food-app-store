import { toast } from "react-toastify";

/* export const fetchData = async (dispatch) => {
  const fetchHandler = async () => {
   const res = await fetch(
     "https://foodweb-app-default-rtdb.firebaseio.com/cartItems.json"
   );
   const data = await res.json()
   return data;
  }
  try {
   const cartData = await fetchHandler()
   dispatch(replaceData(cartData))
  } catch (error) {
   toast.error("could'nt fetch cart items")   
  }
 } */


export const sendCartData = async (cart) => {  
    const addCartToDb = async () => {
      const res = await fetch(
        "https://foodweb-app-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "put",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    try {
      await addCartToDb();
    } catch (error) {
      toast.error("An error occured");
    }
  };

