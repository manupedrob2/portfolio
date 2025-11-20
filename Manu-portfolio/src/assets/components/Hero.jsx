export default function HeroComponent() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('fondo1.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/60"></div>

      {/* Contenedor principal */}
      <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        {/* Columna izquierda: texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white animate-fadeIn leading-tight">
            Manuel Pedrobelli
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mt-2 animate-fadeIn delay-200">
            Desarrollador Full Stack.
          </p>

          <p className="text-base sm:text-lg text-gray-300 mt-4 animate-fadeIn delay-300 leading-relaxed">
            Estudiante avanzado de Analista en TIC – UNLP.  <br />
            Desarrollo aplicaciones web.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 animate-fadeIn delay-500">
            
            <a href="ManuelPedrobelli_CV.pdf" download>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold shadow-md transition-transform hover:scale-[1.04] active:scale-95">
                Descargar CV
              </button>
            </a>

            <a href="https://www.linkedin.com/in/manupedrob/">
              <button className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-transform hover:scale-[1.04] active:scale-95">
                LinkedIn
              </button>
            </a>

            <a href="https://github.com/manupedrob2">
              <button className="px-6 py-3 bg-black hover:bg-black/80 text-white rounded-xl font-semibold shadow-md transition-transform hover:scale-[1.04] active:scale-95">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* Columna derecha: foto */}
        <div className="flex justify-center">
          <img
            src="asd123.jpg"
            alt="perfil"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover shadow-lg ring-4 ring-white/20 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
