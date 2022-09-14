import React, { useState, useEffect } from "react";
import Logo from '../assets/images/logo.png'
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaShoppingCart } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import { Menu } from "./Navmenu";
import { Link, useLocation } from 'react-router-dom'
import NavMobile from "./NavMobile";


const Navbar = () => {
  const location = useLocation()

  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const toggle = () => {
    setMobileNav(!mobileNav)
  }

  const scroll = () => {
    if (window.scrollY >= 30) {
      setMobileNav(false)
    }
  }

  window.addEventListener('scroll', scroll)

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setBg(!false);
    } else if (window.location.pathname === "/register") {
      setBg(true);
    } else if (window.location.pathname === "/profile") {
      setBg(true);
    } else if (window.location.pathname === "/") {
      setBg(false);
    }
    
  }, [location])
  

  return (
    <header
      className={`${bg ? "bg-nav py-4 lg:py-6" : "bg-none"}
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center justify-center">
            <img className="h-12 lg:h-12" src={Logo} alt="logo" />
            <span className="logo">
              L<span className="text-primary">foods</span>
            </span>
          </Link>

          {/* nav */}
          <nav className="hidden lg:flex">
            <ul className="lg:flex lg:gap-x-12">
              {Menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} className="capitalize text-3xl hover:text-primary text-white">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex gap-x-8 items-center justify-center text-white">
            <div
              onClick={toggle}
              className="lg:hidden text-3xl text-white cursor-pointer hover:rotate-[360deg] hover:bg-primary rounded-full p-3"
            >
              {mobileNav ? <CgClose /> : <CgMenuRight />}
            </div>
            <div className="text-3xl p-3 rounded-full hover:bg-primary text-center hover:rotate-[360deg]">
              <FaShoppingCart />
            </div>
            <div className="text-3xl p-3 rounded-full hover:bg-primary text-center hover:rotate-[360deg]">
              <BsHeartFill />
            </div>
          </div>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } lg:hidden fixed bottom-0 w-2/4 h-screen transition-all`}
          >
            <NavMobile toggle={toggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
