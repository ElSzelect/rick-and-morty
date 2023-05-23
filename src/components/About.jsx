import React, { useState, useEffect } from "react";
import "./styles/About.css";

function About() {
  const [text, setText] = useState(""); // Texto que se va a mostrar con el efecto de escritura
  const delay = 150; // Retardo entre cada letra (en milisegundos)

  useEffect(() => {
    const targetText = "Hii, I'm Ivan."; // Texto completo a mostrar
    let index = 0;

    const timer = setInterval(() => {
      if (index < targetText.length) {
        setText((prevText) => prevText + targetText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer); // Limpiar el temporizador cuando el componente se desmonte

  }, []); // El segundo parámetro vacío [] asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <main>
      <section className="aboutSection">
        <h1>{text}</h1>
        <h2>FullStack Web Developer</h2>
        <p>I'm glad to show you how I improve my styling skills with CSS, Flexbox, and Architecture</p>
      </section>
    </main>
  );
}

export default About;