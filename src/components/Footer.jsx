import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// Using font awesome icons as links to socials.
export default function Footer() {
    return (
        <footer className=" text-5xl flex justify-center gap-16 py-5 text-gray-600">
                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} bounce /></a>
                <a href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><FontAwesomeIcon icon={faLinkedin} bounce /></a>
                <a href="https://github.com/ChaseOstien"><FontAwesomeIcon icon={faGithub} bounce/></a>
        </footer>
    )
}