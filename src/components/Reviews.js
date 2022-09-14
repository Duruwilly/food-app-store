import React from "react";
import ReviewSlider from "./ReviewSlider";
import Title from "./Title";

const Reviews = () => {
  return (
    <section className="bg-white">
     <Title title="customer's review" />
      <ReviewSlider />
    </section>
  );
};

export default Reviews;
