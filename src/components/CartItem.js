import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CartItem = ({ cart, id, handleDelete}) => {
  return (
    <div key={id}>
      <div className="box">
        <div className="p-6">
          <div className="flex justify-center items-center">
            <div className="flex-[2] imag">
              <img
                src={cart.imgUrls}
                alt={cart.name}
                className="cart-item-image"
              />
            </div>
            <div className="flex-[2]">
              <p className="text-2xl">{cart.name}</p>
              <span className="font-bold text-4xl mt-3">
                ₦{[cart.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="flex-[2]">
              <div className="flex justify-center items-center gap-7">
                <button className="bg-primary h-16 w-16 inline-flex text-white justify-center items-center text-6xl border-none outline-none rounded-lg">
                  -
                </button>
                <p className="text-3xl">1</p>
                <button className="text-5xl bg-primary text-white h-16 w-16 inline-flex justify-center items-center border-none outline-none rounded-lg">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-4xl">
            <span
              className="flex items-center justify-center gap-4 cursor-pointer text-primary"
              onClick={() => handleDelete(id)}
            >
              <FaTrash /> <span className="uppercase">remove</span>
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CartItem