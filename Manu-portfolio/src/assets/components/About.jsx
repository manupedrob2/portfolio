import React, { useState } from 'react';

export default function About({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const habilidades = [
    { title: "Lenguajes", content: "Javascript, Java, SQL, C#" },
    { title: "Frameworks / Librerías", content: "React, Node.js, Express, Blazor (.NET), TailwindCSS, Bootstrap" },
    { title: "Bases de datos", content: "SQLite, diseño y consultas SQL" },
    { title: "Herramientas", content: "Git, GitHub, Linux" },
    { title: "Idiomas", content: "Inglés técnico (lectura y comprensión de documentación)" },
  ];

  const proyectos = [
    {
      title: "Alquilando",
      img: "imagenAlquilando.jpg",
      description: `Alquilando es una aplicación web para la gestión de propiedades en alquiler, que permite a los usuarios publicar inmuebles, realizar reservas y llevar un seguimiento de las operaciones de forma centralizada.
En el proyecto participé de forma activa en todo el ciclo de vida del desarrollo, desde la recolección de requisitos hasta la implementación de funcionalidades.
Realicé entrevistas a usuarios reales para comprender sus necesidades, redacté la documentación inicial (SRS, épicas e historias de usuario) y trabajé bajo la metodología Scrum, participando en sprints, retrospectivas y tareas de equipo.
Apliqué buenas prácticas de desarrollo como patron MVC, principios SOLID, inyección de dependencias y control de versiones con Git.
Desarrollé funcionalidades clave del sistema utilizando Blazor y C#, conectando con bases de datos mediante Entity Framework.
Este proyecto me permitió fortalecer habilidades tanto técnicas como de trabajo colaborativo, priorización de tareas y comunicación con el cliente.`,
      tech: [
        { src: "html-5.png", alt: "HTML5" },
        { src: "css-3.png", alt: "CSS3" },
        { src: "net.png", alt: ".NET" },
        { src: "database.png", alt: "SQLite" },
        { src: "c-sharp.png", alt: "C#" },
        { src: "scrum.png", alt: "Scrum" },
        { src: "git.png", alt: "Git" },
      ],
      link: "https://github.com/ManuelPedrobelli/alquilando"
    },
    {
      title: "Trivia",
      img: "trivia.png",
      description: `Trivia es un juego de preguntas y respuestas diseñado para ofrecer una experiencia interactiva y entretenida a los usuarios. Permite partidas multijugador entre dos jugadores que avanzan por un tablero al responder preguntas correctamente, ganando quien alcance primero la casilla final. Implementé la lógica del juego, el sistema de turnos, el avance en el tablero, el servidor para conexión entre jugadores y la estructura general del flujo de partida`,
      tech: [
        { src: "html-5.png", alt: "HTML5" },
        { src: "css-3.png", alt: "CSS3" },
        { src: "js.png", alt: "JavaScript" },
        { src: "icons8-nodejs-240.png", alt: "Node.js" },
        { src: "express.png", alt: "Express" },
        { src: "git.png", alt: "Git" },
      ],
      link: "https://trivia-3.onrender.com/"
    }
  ];

  return (
    <section id="about" className="mb-2 mt-2 mx-auto flex flex-col items-center px-4 lg:px-6 gap-14 w-full max-w-6xl text-white">
            {/* Portfolio */}
      <div id="portfolio" className="w-full mt-4 flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-xl mb-8">
          Proyectos
        </h2>

        {proyectos.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-8 flex flex-col items-center transition-all duration-1 hover:shadow-2xl "
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} className="rounded-2xl shadow-lg transition-transform " />
            </a>

            <h5 className="mt-6 mb-3 text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {project.title}
            </h5>

            <p className="mb-6 text-left text-gray-200 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6">
              {project.tech.map((tech, tIdx) => (
                <img key={tIdx} src={tech.src} alt={tech.alt} className="w-10 h-10 sm:w-14 sm:h-14 transition-transform hover:-translate-y-1 hover:scale-110" />
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition-all duration-1 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Visit Project
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      
      {/* Habilidades Técnicas */}
      <section id="habilidades" className="w-full ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {habilidades.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-3xl shadow-md hover:shadow-xl transition-all duration-1 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base md:text-lg">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Educación */}
      <div className="w-full mt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          Educación
        </h2>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-1">
          <a href="https://www.info.unlp.edu.ar/analista-en-tic/" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-1">
              Analista en Tecnologías de la Información y la Comunicación
            </h3>
          </a>

          <p className="text-base md:text-lg font-medium">
            <strong>Universidad Nacional de La Plata – Facultad de Informática</strong>
          </p>
          <p className="text-base md:text-lg mb-4">Estado: Finalizando el tercer y último año</p>

          <ul className="list-disc list-inside grid gap-2 text-base md:text-lg">
            <li>Arquitectura de software</li>
            <li>Patrones de Diseño</li>
            <li>Metodologías ágiles</li>
            <li>Ingeniería de software: historias de usuario, documentación, testing, buenas prácticas</li>
            <li>Bases de datos relacionales: SQL, modelado lógico y físico, normalización</li>
            <li>Sistemas operativos</li>
            <li>Programación orientada a objetos</li>
          </ul>

          <p className="mt-4 text-base md:text-lg font-medium">
            <strong>Reconocimiento:</strong> Becario del programa de estímulo al rendimiento académico
          </p>

          <button
            className="mt-4 py-2 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:from-pink-500 hover:to-blue-500 transition-all duration-1"
            onClick={toggleVisibility}
          >
            {isVisible ? "Ocultar historia académica" : "📄 Ver historia académica"}
          </button>

          {isVisible && (
            <div className="flex justify-center w-full mt-6">
              <a href="/historiaacademica.png" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="historiaacademica.png"
                  alt="Historia Académica"
                  className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-600 cursor-pointer transition-transform "
                />
              </a>
            </div>
          )}
        </div>
      </div>
      </section>


    </section>
  );
}
