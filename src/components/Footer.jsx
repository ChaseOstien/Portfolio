import React from "react";

export default function Footer() {
    return (
        <footer className="w-100 text-dark p-4 bottom-0">
            <div className="container text-center mb-5">
                <h4>&copy; {new Date().getFullYear()} - Chase Ostien</h4>
            </div>
        </footer>
    )
}