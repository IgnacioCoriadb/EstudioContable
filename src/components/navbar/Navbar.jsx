"use client"
import Link from 'next/link';
import { useEffect } from 'react';

const ScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);

    if (targetElement) {
      const offset = 180; // Ajusta este valor según la altura de tu Navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className="nav-link active text-white" aria-current="page">
      {children}
    </a>
  );
};

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#004144" }}>
      <div className="container-fluid ms-lg-5 me-lg-5">
        <a className="navbar-brand" href="#">
          <img src="/images/navbar.jpg" alt="estudio contable" width="80" height="90" className="m-3 rounded-circle img-fluid" />
        </a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-4">
              <ScrollLink to="#home">Home</ScrollLink>
            </li>
            <li className="nav-item px-4">
              <ScrollLink to="#services">Servicios</ScrollLink>
            </li>
            <li className="nav-item px-4">
              <ScrollLink to="#about">Quienes Somos</ScrollLink>
            </li>
            <li className="nav-item px-4">
              <ScrollLink to="#contact">Contacto</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
