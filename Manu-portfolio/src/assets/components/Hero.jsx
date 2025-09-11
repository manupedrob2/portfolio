// HeroComponent.jsx
export default function HeroComponent({ text }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('fondo1.jpg')" }}>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 "></div>

      {/* Contenedor principal */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center justify-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 w-3/4 shadow-xl mx-4">
        
        {/* Columna izquierda: texto */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white animate-fadeIn">
            {text.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-3 animate-fadeIn delay-200">
            {text.subtitle}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-4 whitespace-pre-line animate-fadeIn delay-400">
            {
             text.about 
            }
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-3 justify-center items-center md:justify-center mt-6">
            <a href="ManuelPedrobelli_CV.pdf" download>
              <button className="px-6 py-3  bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold shadow-md transition-transform hover:scale-105 border-white">
                {text.cv}
              </button>
            </a>
            <a href="https://www.linkedin.com/in/manuel-pedrobelli-897009213/">
              <button className="px-6 py-3 border border-white text-white rounded-lg font-bold shadow-md hover:bg-white/10 transition-transform hover:scale-105 bg-blue-700">
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/ManuelPedrobelli">
              <button className="px-6 py-3 border border-white text-white rounded-lg font-bold shadow-md hover:bg-white/10 transition-transform hover:scale-105 bg-black">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* Columna derecha: foto */}
        <div className="flex justify-center">
          <img
            src="perfil.jpg"
            alt="software engineer"
            className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
