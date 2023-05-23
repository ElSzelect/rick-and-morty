import "./styles/Contact.css"
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import React from "react"

export default function Contact () {
    return (
    <main>
      <section className="contactSection">
        
          <ul>
            <li><AiFillLinkedin/>Linkedin: <a href="https://www.linkedin.com/in/szelect" target="_blank">Ivan Szelect</a></li>
            <li><AiFillInstagram/>Instagram: <a>@ivan_szelect</a></li>
            <li><AiFillGithub/>GitHub: </li>
            <li>Email: <a>ivanszelect@gmail.com</a></li>
          </ul>
      </section>
    </main>
    )
  }