import React from "react";

const Navbar = () => {
  return (
    // 'fixed' para que flote sobre el Hero.
    // bg-[#1d3557]/80: Deep Space Blue translúcido para fundirse con el tema oceánico.
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#a8dadc]/10 bg-[#1d3557]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer group">
          {/* Al pasar el mouse, el texto brilla en Frosted Blue (#a8dadc) */}
          <span className="text-2xl font-bold text-[#f1faee] tracking-tighter group-hover:text-[#a8dadc] transition-colors">
            MP
          </span>
          {/* El punto ahora es Strawberry Red (#e63946) para matchear el botón del Hero */}
          <div className="w-2 h-2 bg-[#e63946] rounded-full mt-1 animate-pulse"></div>
        </div>

        {/* Links */}
        <ul className="flex space-x-8">
          <li>
            <a 
              href="#inicio" 
              className="text-sm font-medium text-[#f1faee]/70 hover:text-[#f1faee] transition-colors relative group"
            >
              Inicio
              {/* Subrayado: Strawberry Red (#e63946) */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e63946] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          
          <li>
            <a 
              href="#proyectos" 
              className="text-sm font-medium text-[#f1faee]/70 hover:text-[#f1faee] transition-colors relative group"
            >
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e63946] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          
          <li>
            <a 
              href="#contacto" 
              className="text-sm font-medium text-[#f1faee]/70 hover:text-[#f1faee] transition-colors relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e63946] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;