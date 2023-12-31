/* eslint-disable react/no-unescaped-entities */
import React from "react"

// Custom styles for images
const styles= {
    img: {
        margin: 'auto',
    },
    bio: {
        color: '#27272A'
    }
}
// This is the default page rendered in this application.
export default function AboutPage () {
    return (
        <><div className="flex justify-items-start">
            <h2 className="text-5xl p-8 text-teal-600 font-medium font-burtons">About</h2>
        </div>
        <div className="p-10 flex items-center flex-col justify-center">

                <img alt="Profile Picture" src="/img/ProfilePicSmall.png" className="p-10 bg-gradient-to-b from-teal-600 rounded-full" style={styles.img}></img>
                <div className="text-center flex-col p-5 md:py-5 shadow-2xl rounded-xl my-10 mx-5 max-w-3xl bg-slate-300">
                    <p className="text-xl pt-8 pb-5 leading-8 text-gray-900 justify-center ">I am a passionate and dedicated web developer with a keen interest in crafting digital experiences that seamlessly blend creativity and functionality. My journey in the world of coding started with a curiosity to understand the language of the web, and since then, I have immersed myself in the dynamic and ever-evolving landscape of front-end and back-end development.</p>

                    <p className="text-xl py-5 leading-8 text-gray-900 text-center ">Driven by a love for problem-solving and a knack for turning ideas into reality, I thrive on the challenges that come with building innovative solutions. With a solid foundation in HTML, CSS, and JavaScript, coupled with experience using popular frameworks and libraries, I am committed to delivering clean, efficient, and user-centric web applications.</p>

                    <p className="text-xl py-5 leading-8 text-gray-900 text-center ">Away from the keyboard, I spend much of my time with friends and family, in the gym or outdoors. My goal as a new developer is to learn and sharpen my skills by building new projects while working towards applying those skills in a professional setting. Let's collaborate and bring our ideas to life in the digital realm!</p>
                </div>
            </div></>
    )
}
