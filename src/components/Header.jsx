import React from "react"
//import Navbar from "./NavBar"
import { BsFillMoonStarsFill } from 'react-icons/bs';

const styles = {
  uList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // maxWidth: 500,
    margin: 'auto',
  },
  list: {
    display: "inline",
    margin: 30
  }, 
  nav: {
    flexDirection: 'column'
  }, 
  toggle: {
    display: "inline",
    marginLeft: 50
  }, 
}


export default function Header({ currentPage, handlePageChange }) {
    return (
      <section className="">
    <nav style={styles.nav} className=" py-10 mb-12 flex space-between">
      <h1 className="text-xl font-burtons">Chase Ostien</h1>
      <ul style={styles.uList}>
      <li>
        <a href="#aboutme" onClick={() => handlePageChange('AboutPage')} style={styles.list} aria-current="page" className='bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-black px-4 py-2 rounded-md ml-8 text-xl'>About Me</a>
      </li>
      <li>
        <a href="#portfolio" onClick={() => handlePageChange('PortfolioPage')} style={styles.list} className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-black px-4 py-2 rounded-md ml-8 text-xl">Portfolio</a>
      </li>
      <li>
        <a href="#contact" onClick={() => handlePageChange('ContactPage')} style={styles.list} className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-black px-4 py-2 rounded-md ml-8 text-xl">Contact</a>
      </li>
      <li>
        <a href="#resume" onClick={() => handlePageChange('ResumePage')} style={styles.list} className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-black px-4 py-2 rounded-md ml-8 text-xl">Resume</a>
      </li>
      <li style={styles.toggle}>
        <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
      </li>
    </ul>
      
    </nav>
    </section>
    );
}