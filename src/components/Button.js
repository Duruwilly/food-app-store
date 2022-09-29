import React from "react";

export const HeroButton = ({ title }) => {
  return (

      <button
        type="button"
        className="bg-primary hover:bg-transparent hover:border-[2px] hover:border-primary hover:tracking-widest text-white py-3 px-7 text-3xl rounded-md font-bold mt-40"
        >
        {title}
      </button>
  );
};

export const Button = ({ title }) => {
  return (

      <button
        type="button"
        className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-black hover:tracking-widest text-white py-3 px-9 text-3xl rounded-md font-bold mt-4"
        >
        {title}
      </button>
  );
};

export const InputButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="group relative w-full flex justify-center py-3 px-4 text-3xl font-medium rounded-md text-white bg-primary focus:outline-none"
    >
      {text}
    </button>
  );
};
