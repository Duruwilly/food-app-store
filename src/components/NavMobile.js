import React from "react";
import { Menu } from "./Navmenu";
import { Link } from 'react-router-dom'

const NavMobile = ({ toggle, user }) => {
  return (
    <nav className="bg-white shadow-2xl w-full h-full">
      <ul className="text-cente h-ful fle flex-co grid  items-cente justify-cnter gap-y-20 py-32 px-16">
        {Menu.map((item, index) => {
          return (
            <li key={index} onClick={toggle}>
              <Link to={item.path} className="text-4xl capitalize hover:bg-primary hover:py-2 hover:text-white hover:px-24">
                {item.name}
              </Link>
              <p>{user}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
