import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function BookLayout() {
  return (
    <>
      <nav>
        <li className="nav-items"><NavLink to="/" className="nav-link">Books</NavLink></li>
        <li className="nav-items"><NavLink to="form" className="nav-link">Form</NavLink></li>
      </nav>
      <Outlet />
    </>
  );
}
