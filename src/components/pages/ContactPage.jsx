/* eslint-disable no-unused-vars */
import React, { useRef } from "react"
import  { AiFillLinkedin } from 'react-icons/ai';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage () {
    const [ formData, setFormData ] = useState({
        nameText: '',
        emailText: '',
        messageText: ''
    });

    // const { pending } = useFormStatus();

    const form = useRef(formData); 

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Your message has been sent!')

        // More to come on form submission later when I code up the back end of this application.
        emailjs.sendForm('service_6o8ffcr', 'contact_form', form.current, 'n0CrXXOTAUSgBMd5f')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        console.log('Form submitted', formData);
        
        setFormData({
            nameText: '',
            emailText: '',
            messageText: ''
        });
    }

    const handleChange = (e) => {
        // More to come on form change handling later when I code up the back end of this portfolio.
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value
        }))
    }
    
    return ( // Input validation handled by type fields and required attributes.
<section className="bg-slate-100">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="font-burtons mb-4 text-4xl tracking-tight font-extrabold text-center text-teal-600">Contact</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Feel free to contact me by filling out and submitting the form below. If you would like to connect, add me on LinkedIn!<a className=" flex justify-center text-5xl text-gray-600" href="https://www.linkedin.com/in/chase-ostien-2a1205200/"><AiFillLinkedin /></a></p>
      <form action="#" onSubmit={handleSubmit} ref={form} className="space-y-8">
          <div>
              <label htmlFor="subject" className="block mb-2 text-xl font-bold text-gray-900">Name:
                <input type="text" id="subject" name="nameText" value={formData.nameText} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your full name!" required onChange={handleChange}></input>
              </label>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-xl font-bold text-gray-900">Your email:
                <input type="email" id="email" name="emailText" value={formData.emailText} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="test@test.com" required onChange={handleChange}></input>
              </label>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-xl font-bold text-gray-900">Your message:
                <textarea id="message" rows="6" name="messageText" value={formData.messageText} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Send me a message..." onChange={handleChange}></textarea>
              </label>
          </div>
          <button type="submit" className="py-3 px-5 text-lg font-bold text-center text-neutral-700 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300">Send Message</button>
      </form>
  </div>
</section>
    )
}