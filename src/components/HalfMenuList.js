import React from 'react'
import MenuListing from './MenuListing'
import { MenuList } from './Navmenu'
import Title from './Title'
import { Link } from 'react-router-dom'
import { Button } from './Button'

const HalfMenuList = () => {
  return (
    <section>
     <Title title='our menu' />
     <div className="box-container">
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
     {MenuList?.map((menu) => (
      <div className='group relative' key={menu.id}>
      <MenuListing
      price={menu.price}
      src={menu.src}
      title={menu.title}
      desc={menu.description}
      id={menu.id} />
      </div>
      ))}
      </div>
      <div className='flex justify-center'>
       <Link to='/menu' >
        <Button title='view more' />
       </Link>
      </div>
    </section>
  )
}

export default HalfMenuList