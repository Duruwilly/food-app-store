import React from 'react'
import { BsHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { Button } from './Button'

const MenuListing = ({src, price,id, title, desc}) => {
  return (
    <div className='' key={id}>
     <div className='box'>
      <div className='images'>
       <img src={src} alt="" className='shop-item-image' />
       <div className="faHeart">
        <button className="heart-btn">
       <BsHeartFill />
        </button>
       </div>
      </div>
      <div className='content'>
       <div className="stars">
        <BsFillStarFill className='star'/>
        <BsFillStarFill className='star'/>
        <BsFillStarFill className='star'/>
        <BsFillStarFill className='star'/>
        <BsStarHalf className='star' />
       </div>
       <h3 className="shop-item-title">{title}</h3>
       <p className='shop-item-desc'>{desc}</p>
       <Button title='add to cart' />
       <span className='shop-item-price'>{price}</span>
      </div>
     </div>
    </div>
  )
}

export default MenuListing