import { useState, useEffect } from "react";
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SpecialDishSlider from "./SpecialdishSlider";
import { toast } from "react-toastify";

const SpecialDish = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const specialsRef = collection(db, "specials");
        const q = query(specialsRef, orderBy("timestamp", "desc"), limit(12));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
      } catch (error) {
        toast.error("could'nt fetch menu");
      }
    };
    fetchListings();
  }, []);
  return (
    <section className="bg-white">
      <Swiper
        className="slider"
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {listings.map((special) => {
          return (
            <SwiperSlide key={special.id}>
              <SpecialDishSlider
                special={special.data}
                id={special.id}
                img={special.imgUrls}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SpecialDish;
