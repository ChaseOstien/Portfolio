import React from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';


export default function Navbar() {
    return (
    <ul className="">
      <li>
        <a href="/" className="" aria-current="page">About Me</a>
      </li>
      <li>
        <a href="/Portfolio" className="">Portfolio</a>
      </li>
      <li>
        <a href="/Contact" className="">Contact</a>
      </li>
      <li>
        <a href="/Resume" className="">Resume</a>
      </li>
      <li>
        <BsFillMoonStarsFill />
      </li>
    </ul>
    )
}