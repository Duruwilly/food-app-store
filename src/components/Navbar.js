import React, { useState, useEffect } from "react";
import Logo from "../assets/images/cart.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { Menu } from "./Navmenu";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
import { useSelector } from "react-redux";
const Navbar = () => {
  let { totalItemQuantity } = useSelector((state) => state.cart);
  const [mobileNav, setMobileNav] = useState(false);

  const toggle = () => {
    setMobileNav(!mobileNav);
  };

  const scroll = () => {
    if (window.scrollY >= 30) {
      setMobileNav(false);
    }
  };

  window.addEventListener("scroll", scroll);

  return (
    <header
      className="bg-nav lg:py-6
      fixed left-0 top-0 right-0 py-8 z-10 w-full transition-all duration-200 html"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="">
            <img src={Logo} alt="" className='h-14' />
          </Link>

          {/* nav */}
          <nav className="hidden lg:flex">
            <ul className="lg:flex lg:gap-x-12">
              {Menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="capitalize text-3xl hover:text-primary text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="grid lg:grid-cols-1 grid-cols-2 gap-x-12 items-center justify-center text-white">
            <div
              onClick={toggle}
              className="lg:hidden text-4xl md:text-3xl text-white cursor-pointer hover:rotate-[360deg]  p-3"
            >
              {mobileNav ? <CgClose /> : <CgMenuRight />}
            </div>
            <div className="relative">
                <Link to="/cart">
              <div className="text-4xl md:text-3xl p-3 cursor-pointer text-center hover:rotate-[360deg]">
                  <FaShoppingCart />
              </div>
              {totalItemQuantity === 0 ? false : true && <div className="amount-container">
                <p className="total-amount">{totalItemQuantity}</p>
              </div>}
                </Link>
            </div>
          </div>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } lg:hidden fixed bottom-0 top-0 w-2/4 h-screen transition`}
          >
            <NavMobile toggle={toggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
