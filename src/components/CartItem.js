import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { decrementItem, incrementItem, removeItem } from '../redux/cartSlice'

const CartItem = ({ name, price, quantity, img, id }) => {

  const dispatch = useDispatch()

  return (
    <div key={id}>
      <div className="box">
        <div className="p-6">
          <div className="flex justify-center items-center">
            <div className="flex-[2]">
              <img src={img} alt={name} className="w-[75px] h-auto" />
            </div>
            <div className="flex-[2]">
              <p className="text-3xl mb-3">{name}</p>
              <span className="font-bold text-4xl">
                ₦{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="flex-[2]">
              <div className="flex justify-center items-center gap-7">
                <button
                  className="bg-primary h-16 w-16 inline-flex text-white justify-center items-center text-6xl border-none outline-none rounded-lg"
                  onClick={() => {
                    dispatch(decrementItem({ id }));
                  }} disabled={quantity === 1}
                >
                  -
                </button>
                <p className="text-3xl">{quantity}</p>
                <button
                  className="text-5xl bg-primary text-white h-16 w-16 inline-flex justify-center items-center border-none outline-none rounded-lg"
                  onClick={() => {
                    dispatch(incrementItem({ id }));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-3xl">
            <span
              className="flex items-center justify-center gap-4 cursor-pointer text-primary"
              onClick={() => {dispatch(removeItem(id))}}
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