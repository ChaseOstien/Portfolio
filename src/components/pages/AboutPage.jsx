import React from "react"

const styles= {
    img: {
        margin: 'auto',
    },
    bio: {
        color: '#27272A'
    }
}

export default function AboutPage () {
    return (
        <div className="  p-10 flex-col">
            <h2 className="text-5xl py-2 text-teal-600 font-medium font-burtons">About</h2>
            <img alt="Profile Picture" src="public/img/ProfilePicSmall.png" className="p-10 bg-gradient-to-b from-teal-600 rounded-full" style={styles.img}></img>
            <div className="text-center flex-col">
            <p className="text-xl pt-8 pb-5 leading-8 text-gray-900 justify-center max-w-screen-md" >I am a passionate and dedicated web developer with a keen interest in crafting digital experiences that seamlessly blend creativity and functionality. My journey in the world of coding started with a curiosity to understand the language of the web, and since then, I have immersed myself in the dynamic and ever-evolving landscape of front-end and back-end development.</p>

            <p className="text-xl py-5 leading-8 text-gray-900 text-center max-w-screen-md">Driven by a love for problem-solving and a knack for turning ideas into reality, I thrive on the challenges that come with building innovative solutions. With a solid foundation in HTML, CSS, and JavaScript, coupled with expertise in popular frameworks and libraries, I am committed to delivering clean, efficient, and user-centric web applications.</p>

            <p className="text-xl py-5 leading-8 text-gray-900 text-center max-w-screen-md">Away from the keyboard, I find inspiration in diverse interests such as graphic design, user experience, and the latest trends in technology. My goal is not just to write code but to create impactful and visually stunning digital experiences that leave a lasting impression. Let's collaborate and bring your ideas to life in the digital realm!</p>
            </div>
        </div>
    )
}
