import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-6 py-3">
      {/* Logo */}
      <div className="text-white text-xl font-bold">MP</div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Servicios
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
