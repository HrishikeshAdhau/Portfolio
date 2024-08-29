import "./FormStyles.css";
import React from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_1nq967h','template_lb9kino',e.target,'WrJm8fZHw5x0vMfCj')
    alert("submitted");
    
  }
  return <div className="form">
    <form onSubmit={sendEmail}>
        <label htmlFor="Your Name">Your Name:</label>
        <input type="text" name="Your Name" id="Your Name"></input>
        <label htmlFor="emailFrom">Email:</label>
        <input type="text" name="emailFrom" id="emailFrom"></input>
        <label htmlFor="Subject">Subject:</label>
        <input type="text" name="Subject" id="Subject"></input>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box" rows="6" placeholder="Type Your message here"/>
        <button className="btn">Submit</button>

    </form>
  </div>
  
};

export default Form
