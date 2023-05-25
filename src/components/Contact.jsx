import "./styles/Contact.css"
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import React from "react"

export default function Contact () {
    return (
    <main>
      <section className="contactSection">
        
          <ul>
            <li><a href="https://www.linkedin.com/in/szelect" target="_blank"><AiFillLinkedin/>Linkedin: Ivan Szelect</a></li>
            <li><a href="https://www.instagram.com/ivan_szelect/" target="_blank"><AiFillInstagram/>Instagram: @ivan_szelect</a></li>
            <li><a href="https://github.com/ElSzelect" target="_blank"><AiFillGithub/>GitHub: ElSzelect </a> </li>
            <li><a href="mailto:ivanszelect@gmail.com" target="_blank"><AiFillMail/>Email: ivanszelect@gmail.com</a></li>
          </ul>
      </section>
    </main>
    )
  }