import React, { useState, useContext, createContext, useRef } from 'react';

const StateContext = createContext();

export const ContextWrapper = ({ children }) => {
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
    <StateContext.Provider
    value={{
     mobileNav,
     toggle,
    }}>
     {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);