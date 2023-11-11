import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="w-100 text-dark p-4 bottom-0">
                <a href="https://twitter.com/"><AiFillTwitterCircle /></a>
                <a href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><AiFillLinkedin /></a>
                <a href="https://www.youtube.com/"><AiFillYoutube /></a>
            <div className="container text-center mb-5 flex">
                <h4>&copy; {new Date().getFullYear()} - Chase Ostien</h4>
            </div>
        </footer>
    )
}