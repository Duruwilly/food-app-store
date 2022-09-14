import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import HalfMenuList from '../components/HalfMenuList'
import Heroe from '../components/Heroe'
import Newsletter from '../components/Newsletter'
import Reviews from '../components/Reviews'
import SpecialDish from '../components/SpecialDish'

const Home = () => {
  return (
    <div>
     <Heroe />
     <AboutUs />
     <SpecialDish />
     <HalfMenuList />
     <Reviews />
     <Newsletter />
     <Footer />
    </div>
  )
}

export default Home