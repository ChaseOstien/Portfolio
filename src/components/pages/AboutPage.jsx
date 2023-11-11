import React from "react"

const styles = {
    header: {
        textColor: 'teal-600'
    }
}

export default function AboutPage () {
    return (
        <div className="text-center p-10">
            <h2 style={styles.header} className="text-5xl py-2 text-teal-600 font-medium">About</h2>
            <img alt="Profile Picture" src="public/img/ProfilePicSmall.png" className="p"></img>
            <p className="font-burtons">This will be a paragraph about me. It will be awesome and contain lots of cool descriptive words about what I am good at and projects that I have completed.</p>
        </div>

    )
}
