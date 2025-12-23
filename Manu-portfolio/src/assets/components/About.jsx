import React, { useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // --- DATOS ---

  const habilidades = [
    { title: "Lenguajes", content: "C#, JavaScript, Java, SQL" },
    {
      title: "Frameworks & Libs",
      content: "React, .NET (Blazor/Core), Node.js, Express, TailwindCSS",
    },
    { title: "Base de Datos", content: "PostgreSQL, SQLite, SQL Server" },
    { title: "Herramientas", content: "Git, GitHub, Postman, Linux" },
    {
      title: "Idiomas",
      content: "Inglés Técnico (Lectura fluida de documentación)",
    },
  ];

 const proyectos = [
    {
      title: "Alquilando",
      img: "imagenAlquilando.jpg",
      summary: "Plataforma web integral para la gestión centralizada de alquileres, reservas y administración de propiedades.",
      points: [
        "Participación en todo el ciclo de vida (SDLC) bajo metodología Scrum.",
        "Arquitectura robusta implementando patrón MVC, principios SOLID e Inyección de Dependencias.",
        "Relevamiento de requisitos reales, redacción de User Stories y documentación SRS.",
        "Desarrollo Full Stack utilizando Blazor (Frontend) y .NET Core con Entity Framework (Backend)."
      ],
      tech: [
        { src: "c-sharp.png", alt: "C#" },
        { src: "net.png", alt: ".NET" },
        { src: "database.png", alt: "SQL" },
        { src: "scrum.png", alt: "Scrum" },
        { src: "git.png", alt: "Git" },
      ],
      link: "https://github.com/manupedrob2/alquilando-app",
    },
    {
      title: "Trivia Multiplayer",
      img: "trivia.png",
      summary: "Juego interactivo de preguntas y respuestas en tiempo real con sistema de salas y tablero.",
      points: [
        "Lógica compleja de juego: gestión de turnos, estados de partida y condiciones de victoria.",
        "Comunicación cliente-servidor para sincronización entre jugadores.",
        "Diseño de interfaz dinámica y responsive."
      ],
      tech: [
        { src: "js.png", alt: "JavaScript" },
        { src: "icons8-nodejs-240.png", alt: "Node.js" },
        { src: "express.png", alt: "Express" },
        { src: "html-5.png", alt: "HTML5" },
        { src: "css-3.png", alt: "CSS3" },
      ],
      link: "https://trivia-3.onrender.com/",
    },
    {
      title: "Comfy Chair",
      img: "comfy.png",
      summary: "ComfyChair es una plataforma de software diseñada para la gestión integral de conferencias científicas. Su objetivo principal es centralizar y facilitar todo el flujo de trabajo de un evento académico, conectando a los distintos roles participantes (organizadores, revisores y autores).",
      points: [
        "Desarrollo Frontend SPA moderno y tipado utilizando React, TypeScript y TanStack Router.",
        "Implementación de flujo de diseño UX/UI iterativo: validación en papel, prototipado High-Fidelity en Figma y maquetado con Shadcn/ui.",
        "Arquitectura desacoplada consumiendo una API RESTful (Django) para la gestión asíncrona de datos y archivos.",
        "Diseño Responsive y Accesible con Tailwind CSS, optimizando la experiencia de usuario en formularios complejos y dashboards."
      ],
      tech: [
        { src: "react.png", alt: "React" },
        { src: "typescript.png", alt: "TypeScript" },
        { src: "tailwind.png", alt: "Tailwind CSS" },
        { src: "figma.png", alt: "Figma" },
        { src: "python.png", alt: "Django REST" },
      ],
      // Agrega link si tienes el repo o el deploy, sino puedes omitirlo o dejarlo vacío
      link: "https://github.com/tu-usuario/comfy-chair", 
    }
  ];

  const educacion = {
    titulo: "Analista TIC",
    subtitulo: "Universidad Nacional de La Plata (UNLP)",
    estado: "Estudiante Avanzado (Finalizando 3er año)",
    logoSrc: "unlp-logo.png", 
    link: "https://www.info.unlp.edu.ar/analista-en-tic/",
    temasClave: [
      "Arquitectura de Software & Patrones de Diseño",
      "Ingeniería de Software (Documentación, Testing, Calidad)",
      "Bases de Datos Relacionales (Normalización, SQL Avanzado)",
      "Programación Orientada a Objetos (POO)",
      "Estructuras de Datos y Algoritmos",
    ],
    reconocimiento: "Becario del programa de estímulo al rendimiento académico",
    historiaAcademica: {
      src: "historiaacademica.png",
      link: "/historiaacademica.png",
    },
  };

  // --- RENDER ---

  return (
    <section id="proyectos" className="py-16 px-4 md:px-6 w-full max-w-6xl mx-auto space-y-24">
      
      {/* --- SECCIÓN PROYECTOS --- */}
      <div className="flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1faee] tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-[#a8dadc] max-w-2xl mx-auto">
            Aplicaciones desarrolladas simulando entornos reales, enfocadas en arquitectura limpia y experiencia de usuario.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {proyectos.map((project, idx) => (
            <article
              key={idx}
              // Card: Hover con borde Strawberry Red (#e63946)
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#e63946]/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Columna Imagen (40%) */}
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/90 via-transparent to-transparent z-10 lg:hidden"/>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Columna Info (60%) */}
                <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      {/* Título: Al pasar el mouse cambia a Frosted Blue */}
                      <h3 className="text-3xl font-bold text-[#f1faee] group-hover:text-[#a8dadc] transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Link "Ver Código": Strawberry Red */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#e63946] hover:text-[#d62839] transition-colors"
                      >
                        Ver Código
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>

                    <p className="text-[#f1faee]/80 text-lg mb-6 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Lista de Puntos Clave */}
                    <ul className="space-y-2 mb-8">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#f1faee]/70 text-sm md:text-base">
                          {/* Bullet Point: Strawberry Red */}
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e63946] flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack y Botón Móvil */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#a8dadc]/10 pt-6">
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                      {project.tech.map((tech, tIdx) => (
                        <div key={tIdx} className="relative group/icon">
                          <img
                            src={tech.src}
                            alt={tech.alt}
                            className="w-8 h-8 opacity-70 group-hover/icon:opacity-100 transition-opacity"
                            title={tech.alt}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Botón Móvil: Outline Rojo */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:hidden w-full text-center py-3 rounded-xl bg-[#e63946]/10 text-[#e63946] font-semibold border border-[#e63946]/50 hover:bg-[#e63946] hover:text-[#f1faee] transition-all"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN HABILIDADES --- */}
      <div id="habilidades">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f1faee] mb-10">
          Stack Tecnológico
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habilidades.map((item, idx) => (
            <div
              key={idx}
              // Hover Border: Strawberry Red sutil
              className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-[#e63946]/30 transition-all duration-300"
            >
              {/* Título: Frosted Blue */}
              <h3 className="text-[#a8dadc] font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-[#f1faee]/80 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN EDUCACIÓN --- */}
      {/* CORREGIDO: Eliminado 'max-w-4xl' y cambiado a 'w-full' para igualar el ancho de arriba */}
      <div id="educacion" className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f1faee] mb-10">
          Formación Académica
        </h2>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decoración de fondo: Steel Blue (#457b9d) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#457b9d]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#f1faee] mb-2">
                  {educacion.titulo}
                </h3>
                {/* Subtítulo: Frosted Blue */}
                <p className="text-xl text-[#a8dadc] font-medium">
                  {educacion.subtitulo}
                </p>
                <p className="text-[#f1faee]/60 mt-2 flex items-center gap-2">
                  {/* Punto: Strawberry Red */}
                  <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse"></span>
                  {educacion.estado}
                </p>
              </div>
              
              <img
                src={educacion.logoSrc}
                alt="UNLP"
                className="w-16 h-auto opacity-80"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#f1faee] font-semibold mb-3">Conceptos Clave Adquiridos:</h4>
                <div className="flex flex-wrap gap-2">
                  {educacion.temasClave.map((tema, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/10 text-[#f1faee]/80 text-sm border border-white/5">
                      {tema}
                    </span>
                  ))}
                </div>
              </div>

              {/* Caja Reconocimiento: Steel Blue sutil */}
              <div className="p-4 rounded-xl bg-[#457b9d]/20 border border-[#457b9d]/30">
                <p className="text-[#f1faee] text-sm font-medium text-center">
                  🏆 {educacion.reconocimiento}
                </p>
              </div>

              {/* Botón Toggle Historia */}
              <div className="flex flex-col items-center gap-6 mt-8">
                <button
                  onClick={toggleVisibility}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-[#f1faee] transition-colors border border-white/10 flex items-center gap-2"
                >
                  {isVisible ? "Ocultar Historia" : "Ver Historia Académica"}
                  <svg className={`w-4 h-4 transition-transform ${isVisible ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {/* Imagen Historia Académica */}
                <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <a href={educacion.historiaAcademica.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={educacion.historiaAcademica.src}
                      alt="Historia Académica"
                      className="w-full rounded-xl border border-white/20 shadow-2xl hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}