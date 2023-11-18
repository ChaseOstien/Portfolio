import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className=" text-5xl flex justify-center gap-16 py-5 text-gray-600">
                <a href="https://twitter.com/"><AiFillTwitterCircle /></a>
                <a href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><AiFillLinkedin /></a>
                <a href="https://github.com/ChaseOstien"><FontAwesomeIcon icon={faGithub} bounce /></a>
        </footer>
    )
}