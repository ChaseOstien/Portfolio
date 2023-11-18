/* eslint-disable no-unused-vars */
import React from "react"
import  { AiFillLinkedin } from 'react-icons/ai';
import { useState } from "react";

export default function ContactPage () {
    const [ formData, setFormData ] = useState({
        nameText: '',
        emailText: '',
        messageText: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // More to come on form submission later when I code up the back end of this application.

        console.log('Form submitted', formData);
    }

    const handleChange = (e) => {
        // More to come on form change handling later when I code up the back end of this portfolio.
    }
    
    return (
        <section className="bg-slate-100">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="font-burtons mb-4 text-4xl tracking-tight font-extrabold text-center text-teal-600">Contact</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Feel free to contact me by filling out and submitting the form below. If you would like to connect, add me on LinkedIn!<a className=" flex justify-center text-5xl text-gray-600" href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><AiFillLinkedin /></a></p>
      <form action="#" onSubmit={handleSubmit} className="space-y-8">
          <div>
              <label htmlFor="subject" className="block mb-2 text-xl font-bold text-gray-900">Name:</label>
              <input type="text" id="subject" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your full name!" required onChange={handleChange}></input>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-xl font-bold text-gray-900">Your email:</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="test@test.com" required onChange={handleChange}></input>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-xl font-bold text-gray-900">Your message:</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Send me a message..." onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-lg font-bold text-center text-neutral-700 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300">Send message</button>
      </form>
  </div>
</section>
    )
}