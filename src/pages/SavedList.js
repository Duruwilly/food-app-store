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
import SavedItem from "../components/SavedItem";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import Headers from "../components/Headers";

const SavedList = () => {
  const savedItems = useSelector((state) => state.save.savedItems);

  const [favouriteList, setFavouriteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  /* useEffect(() => {
    const fetchFavouriteList = async () => {
      try {
        const docRef = collection(db, "favourites");
        const q = query(
          docRef,
          where("favouriteRef", "==", auth.currentUser.uid),
          orderBy("timestamp", "desc"),
          limit(12)
        );
        const docSnap = await getDocs(q);
        const favouriteItems = [];
        docSnap.forEach((doc) => {
          return favouriteItems.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setFavouriteList(favouriteItems);
        setLoading(false);
      } catch (error) {
        toast.error("unable to get favourite lists", { toastId: "YU$V%^^$TG" });
        navigate("/");
      }
    };
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchFavouriteList();
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
  }, [isMounted]); */

  /* const deleteFavourite = async (favouriteId) => {
    try {
      await deleteDoc(doc(db, "favourites", favouriteId));
      const updatedFavouriteList = favouriteList.filter(
        (favourite) => favourite.id !== favouriteId
      );
      setFavouriteList(updatedFavouriteList);
      toast.success("deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("error", { toastId: "#@#433szxdz#@23" });
    }
  }; */


  return (
    <div className="">
      <Headers title='saved items'/>
      {savedItems?.length !== 0 ? (
        <section className=" pb-24">
              <main className="">
                <div className="box-container">
                  {savedItems?.map((saved) => (
                    <div className="group relative" key={saved.id}>
                      <SavedItem
                        {...saved}
                        imgUrls={saved.imgUrls}
                      />
                    </div>
                  ))}
                </div>
              </main>
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
}

export default SavedList;
