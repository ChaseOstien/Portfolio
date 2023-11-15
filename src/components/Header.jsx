import React from "react"
//import Navbar from "./NavBar"
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';

const styles = {
  toggle: {
    display: "inline",
    marginLeft: 60,
    justifyContent: 'center',
  },
  title: {
    // marginRight: 60
  }
}


export default function Header({ currentPage, handlePageChange }) {
      const [ toggle, setToggle ] = useState(false);

      const handleToggle = () => {
        setToggle(!toggle);
      }

    return (
      <section>
    <nav className={toggle? 'navbar expanded' : 'navbar'}>
    <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
        </div>
        <h1 style={styles.title} className="logo font-burtons ">Chase Ostien</h1>
      <ul className="links">
      <li className="">
        <a href="#aboutme" onClick={() => handlePageChange('AboutPage')} className=" font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hover:underline-offset-1 active:underline-offset-1" aria-current="page">About Me</a>
      </li>
      <li className="">
        <a href="#portfolio" onClick={() => handlePageChange('PortfolioPage')} className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md">Portfolio</a>
      </li>
      <li className="">
        <a href="#contact" onClick={() => handlePageChange('ContactPage')} className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md">Contact</a>
      </li>
      <li className="">
        <a href="#resume" onClick={() => handlePageChange('ResumePage')}className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md" >Resume</a>
      </li>
      <li style={styles.toggle} className="darkMode">
        <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
      </li>
    </ul>
    </nav>
    </section>
    );
}