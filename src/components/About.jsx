import React, { useState, useEffect } from "react";
import "./styles/About.css";

function About() {
  const [text, setText] = useState(""); // Texto que se va a mostrar con el efecto de escritura
  const delay = 150; // Retardo entre cada letra (en milisegundos)

  useEffect(() => {
    const targetText = "FuullStack Web Developer"; // Texto completo a mostrar

    let index = 0;
    let timer;

    const typeNextLetter = () => {
      setText((prevText) => prevText + targetText.charAt(index));
      index++;

      if (index < targetText.length) {
        timer = setTimeout(typeNextLetter, delay);
      }
    };

    timer = setTimeout(typeNextLetter, delay);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte

  }, []); // El segundo parámetro vacío [] asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <main>
      <section className="aboutSection">
        <h1>Hi, I'm Ivan Szelect</h1>
        <h2>{text}</h2>
        <p>I'm glad to show you how I improve my styling skills at CSS, Flexbox, and React.</p>
      </section>
    </main>
  );
}

export default About;
