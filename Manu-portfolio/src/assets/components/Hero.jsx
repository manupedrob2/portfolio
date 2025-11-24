export default function HeroComponent() {
  return (
    <div id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 overflow-hidden "
      style={{ backgroundImage: "url('1bg1.jpg')" }}
    >
      {/* 1. Overlay: Deep Space Blue (#1d3557)
          Reemplaza al gris/negro para dar el tono "Profundidad del océano" */}
      <div className="absolute inset-0 bg-[#1d3557]/90 mix-blend-multiply"></div>
      
      {/* Gradiente sutil para profundidad extra */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557] via-transparent to-[#1d3557]/40"></div>

      {/* Contenedor Glassmorphism */}
      <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-[#a8dadc]/10 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center animate-fade-in-up">
        
        {/* Columna izquierda: Texto */}
        <div className="flex-1 text-center md:text-left space-y-6">
          
          <div className="space-y-2">
            {/* Nombre: Honeydew (#f1faee) para máximo contraste y limpieza */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f1faee] leading-tight">
              Manuel Pedrobelli
            </h1>
            {/* Subtítulo: Frosted Blue (#a8dadc) para el toque fresco */}
            <h2 className="text-xl sm:text-2xl font-medium text-[#a8dadc] tracking-wide">
              Desarrollador Web .NET & React
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#f1faee]/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Estudiante avanzado de <strong className="text-[#f1faee] font-semibold">Analista TIC (UNLP)</strong>. <br></br>
            Creo soluciones digitales escalables enfocadas en arquitectura limpia, 
            buenas prácticas y código robusto.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            
            {/* Botón Primario: Strawberry Red (#e63946) 
                El color vibrante para el Call To Action principal. */}
            <a href="ManuelPedrobelli_CV.pdf" download className="group">
              <button className="flex items-center gap-2 px-8 py-3.5 bg-[#e63946] hover:bg-[#d62839] text-[#f1faee] rounded-full font-semibold shadow-lg shadow-[#e63946]/20 transition-all hover:scale-105 active:scale-95">
                <span>Descargar CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 12.75l-3-3m3 3l3-3m-3 3V3" />
                </svg>
              </button>
            </a>

            {/* Botones Secundarios */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/manupedrob/">
                {/* Hover border: Frosted Blue (#a8dadc) */}
                <button className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#f1faee] rounded-full transition-all hover:scale-110 active:scale-95 hover:border-[#a8dadc]/50 hover:text-[#a8dadc]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>

              <a href="https://github.com/manupedrob2">
                <button className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#f1faee] rounded-full transition-all hover:scale-110 active:scale-95 hover:border-[#a8dadc]/50 hover:text-[#a8dadc]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* Columna derecha: Foto */}
        <div className="flex justify-center relative">
          {/* Glow effect: Steel Blue (#457b9d) para un brillo profesional */}
          <div className="absolute inset-0 bg-[#457b9d]/30 blur-3xl rounded-full transform scale-90"></div>
          
          <img
            src="asd123.jpg"
            alt="Manuel Pedrobelli"
            // Hover Ring: Strawberry Red (#e63946) para combinar con el botón
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-2xl ring-4 ring-white/10 hover:ring-[#e63946]/50 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}