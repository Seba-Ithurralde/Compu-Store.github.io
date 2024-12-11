import React from 'react';
import './NavBar.css';
import LogoCompu from './LogoCompu';
import { Link } from 'react-router-dom';
import { CartIcon } from './Icons';

export default function NavBar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'><LogoCompu /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item"></li>
          <Link to="/category/Notebooks">Notebooks</Link>
        <li className="nav-item"></li>
          <Link to="/category/Perifericos">Perifericos</Link>
        <li className="nav-item"></li>
          <Link to="/category/Kits">Kits</Link>
        <li className="nav-item dropdown">
        </li>
      </ul>
    </div>
  </div>
  <Link to="/cart"><CartIcon /></Link>
</nav>
    </div>
  )
}

