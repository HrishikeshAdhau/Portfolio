import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>B/24,Priyadarshini Park,Umelman,Vasai west,Thane-401202</p>
                        <p>INDIA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    9067559978</h4>
                </div >
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    hrishikesh.ad75@gmail.com</h4>

                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Hrishikesh Adhau.I enjoy discussing new projects and design challenges</p>
                <div className="socail">
                <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}} />
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}} />
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
