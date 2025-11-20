import React, { useState } from "react";

export default function About({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // --- ARREGLOS DE DATOS ---

  const habilidades = [
    { title: "Lenguajes", content: "Javascript, Java, SQL, C#" },
    {
      title: "Frameworks / Librerías",
      content: "React, Node.js, Express, Blazor (.NET), TailwindCSS, Bootstrap",
    },
    { title: "Bases de datos", content: "SQLite, diseño y consultas SQL" },
    { title: "Herramientas", content: "Git, GitHub, Linux" },
    {
      title: "Idiomas",
      content: "Inglés técnico (lectura y comprensión de documentación)",
    },
  ];

  const proyectos = [
    {
      title: "Alquilando",
      img: "imagenAlquilando.jpg",
      description: `Alquilando es una aplicación web para la gestión de propiedades en alquiler, que permite a los usuarios publicar inmuebles, realizar reservas y llevar un seguimiento de las operaciones de forma centralizada.\n
En el proyecto participé de forma activa en todo el ciclo de vida del desarrollo, desde la recolección de requisitos hasta la implementación de funcionalidades.\n
Realicé entrevistas a usuarios reales para comprender sus necesidades, redacté la documentación inicial (SRS, épicas e historias de usuario) y trabajé bajo la metodología Scrum, participando en sprints, retrospectivas y tareas de equipo.\n
Apliqué buenas prácticas de desarrollo como patron MVC, principios SOLID, inyección de dependencias y control de versiones con Git.\n
Desarrollé funcionalidades clave del sistema utilizando Blazor y C#, conectando con bases de datos mediante Entity Framework.\n
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
      link: "https://github.com/manupedrob2/alquilando-app",
    },
    {
      title: "Trivia",
      img: "trivia.png",
      description: `Trivia es un juego de preguntas y respuestas diseñado para ofrecer una experiencia interactiva y entretenida a los usuarios.\n Permite partidas multijugador entre dos jugadores que avanzan por un tablero al responder preguntas correctamente, ganando quien alcance primero la casilla final.\n Implementé la lógica del juego, el sistema de turnos, el avance en el tablero, el servidor para conexión entre jugadores y la estructura general del flujo de partida`,
      tech: [
        { src: "html-5.png", alt: "HTML5" },
        { src: "css-3.png", alt: "CSS3" },
        { src: "js.png", alt: "JavaScript" },
        { src: "icons8-nodejs-240.png", alt: "Node.js" },
        { src: "express.png", alt: "Express" },
        { src: "git.png", alt: "Git" },
      ],
      link: "https://trivia-3.onrender.com/",
    },
  ];

  // Nuevo arreglo de datos para la sección de Educación
  const educacion = {
    titulo: "Analista en Tecnologías de la Información y la Comunicación",
    institucion: "Universidad Nacional de La Plata – Facultad de Informática",
    logoSrc: "unlp-logo.png",
    logoAlt: "UNLP",
    link: "https://www.info.unlp.edu.ar/analista-en-tic/",
    estado: "Finalizando el tercer y último año",
    temasClave: [
      "Arquitectura de software",
      "Patrones de Diseño",
      "Metodologías ágiles",
      "Ingeniería de software: historias de usuario, documentación, testing, buenas prácticas",
      "Bases de datos relacionales: SQL, modelado lógico y físico, normalización",
      "Sistemas operativos",
      "Programación orientada a objetos",
    ],
    reconocimiento:
      "Becario del programa de estímulo al rendimiento académico",
    historiaAcademica: {
      src: "historiaacademica.png",
      alt: "Historia Académica",
      link: "/historiaacademica.png",
    },
  };

  // --- RENDERIZADO DEL COMPONENTE ---

  return (
    <section
      id="about"
      className="mb-2 mt-2 mx-auto flex flex-col items-center px-4 lg:px-6 gap-14 w-full max-w-6xl text-white"
    >
      {/* Portfolio */}
      <div
        id="portfolio"
        className="w-full mt-4 flex flex-col items-center gap-6 "
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-xl mb-4 mt-2">
          Proyectos
        </h2>

        {proyectos.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                 rounded-2xl shadow-lg sm:p-10 flex flex-col items-center 
                 transition-all duration-300 hover:shadow-2xl
                 w-full mx-auto"
          >
            {/* Imagen */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full  max-w-xl mx-auto        /* ocupa todo el ancho */
                  h-auto            /* mantiene proporción */
                  object-cover      /* se ajusta sin deformarse */
                  rounded-2xl
                  shadow-lg
                  transition-transform"
              />
            </a>

            {/* Título */}
            <h5
              className="mt-4 mb-4 text-2xl md:text-4xl font-bold text-center 
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-blue-400 via-purple-400 to-pink-400 w-full"
            >
              {project.title}
            </h5>

            {/* Descripción */}
            <p className="mb-8 text-left text-gray-200 whitespace-pre-wrap md:text-xl w-full max-w-4xl mx-auto">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div
              className="flex flex-wrap justify-center gap-5 sm:gap-8 
                    bg-white/10 backdrop-blur-md rounded-xl p-5 w-full max-w-3xl mx-auto"
            >
              {project.tech.map((tech, tIdx) => (
                <img
                  key={tIdx}
                  src={tech.src}
                  alt={tech.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-transform 
                      hover:-translate-y-1 hover:scale-110"
                />
              ))}
            </div>

            {/* Botón */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 text-white font-semibold 
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    rounded-xl shadow-lg hover:scale-105 transition-all 
                    focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Visit Project
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Habilidades Técnicas */}
      <section id="habilidades" className="w-full ">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-xl mb-8">
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
          <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-xl mb-8">
            Educación
          </h2>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-1">
            <div className="relative w-full">
              {/* LOGO arriba derecha */}
              <img
                src={educacion.logoSrc}
                alt={educacion.logoAlt}
                className="w-20 md:w-40 absolute top-0 right-0 opacity-90"
              />

              {/* Texto */}
              <a
                href={educacion.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 pr-24 md:pr-40 hover:text-blue-400 transition-colors duration-300">
                  {educacion.titulo}
                </h3>
              </a>
            </div>

            <p className="text-base md:text-2xl">
              {educacion.institucion}
            </p>
            <p className="text-base md:text-lg mb-4">
              Estado: {educacion.estado}
            </p>
            <ul className="list-disc list-inside grid text-base md:text-lg">
              {educacion.temasClave.map((tema, idx) => (
                <li key={idx}>{tema}</li>
              ))}
            </ul>

            <p className="mt-4 text-base md:text-lg font-medium">
              Reconocimiento: {educacion.reconocimiento}
            </p>

            <div className="flex justify-center w-full">
              <button
                className="mt-4 py-2 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:from-pink-500 hover:to-blue-500 transition-all duration-1"
                onClick={toggleVisibility}
              >
                {isVisible
                  ? "Ocultar historia académica"
                  : "📄 Ver historia académica"}
              </button>
            </div>

            {isVisible && (
              <div className="flex justify-center w-full mt-6">
                <a
                  href={educacion.historiaAcademica.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={educacion.historiaAcademica.src}
                    alt={educacion.historiaAcademica.alt}
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