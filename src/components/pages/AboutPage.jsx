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
        <div className=" text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">About</h2>
            <img alt="Profile Picture" src="public/img/ProfilePicSmall.png" className="p-10" style={styles.img}></img>
            <p className="text-md py-5 leading-8 text-gray text-center" >This will be a paragraph about me. It will be awesome and contain lots of cool descriptive words about what I am good at and projects that I have completed.</p>
        </div>
    )
}
