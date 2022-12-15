import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-md shrink-0">
      <nav className="flex justify-between items-center px-12 py-3">
        <div>
          <Link to="/" className="font-bold text-xl text-blue-600">LOGO</Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link to="about" className="px-6 py-2 rounded cursor-pointer hover:bg-blue-200 focus:bg-blue-400">About</Link>
            <Link to="contact" className="px-6 py-2 rounded cursor-pointer hover:bg-blue-200 focus:bg-blue-400">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
