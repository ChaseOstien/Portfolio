import React from "react"
import Navbar from "./NavBar"
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
  }
}


export default function Header() {
    return (
      <section className="">
    <nav style={styles.nav} className=" py-10 mb-12 flex space-between">
      
      <ul style={styles.uList}>
      <li>
        <a href="/" style={styles.list} aria-current="page">About Me</a>
      </li>
      <li>
        <a href="/Portfolio" style={styles.list}>Portfolio</a>
      </li>
      <li>
        <a href="/Contact" style={styles.list}>Contact</a>
      </li>
      <li>
        <a href="/Resume" style={styles.list}>Resume</a>
      </li>
      <li style={styles.toggle}>
        <BsFillMoonStarsFill />
      </li>
    </ul>
      
    </nav>
    </section>
    );
}