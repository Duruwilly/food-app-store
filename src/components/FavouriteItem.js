import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function FavouriteItem({ listing, id, handleDelete }) {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <div className="text-center py-3">
        <button
          className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-900"
          onClick={() => handleDelete(id)}
        >
          <FaTrash className="cursor-pointer " />
        </button>
      </div>
      <div>
        <li
          key={id}
          className="border-t-2 border-gray-200 flex justify-center items-center gap-5 w-full"
        >
          <div className="py-3">
            <img
              src={listing.imgUrls[0]}
              alt={listing.name}
              className="w-8 h-8 object-cover"
            />
          </div>
          <p className="py-3 ">{listing.name}</p>
          <p className="py-3 text-sm font-bold text-primary">
            ₦{[listing.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </li>
      </div>
    </div>
  );
}

export default FavouriteItem;
