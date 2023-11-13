import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className=" text-5xl flex justify-center gap-16 py-5 text-gray-600">
                <a href="https://twitter.com/"><AiFillTwitterCircle /></a>
                <a href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><AiFillLinkedin /></a>
                <a href="https://www.youtube.com/"><AiFillYoutube /></a>
        </footer>
    )
}