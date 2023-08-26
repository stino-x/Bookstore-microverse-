import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function BookLayout() {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';
  // const isAboutRoute = location.pathname === '/about';
  return (
    <>
      <nav className={isHomeRoute ? 'books-section' : 'nav-category'}>
        <span className={isHomeRoute ? 'icon' : 'icon-category'}>
          Bookstore  CMS
        </span>
        <ul>
          <li className="books"><NavLink to="/" className="nav-link books">Books</NavLink></li>
          <li className="categories"><NavLink to="category" className="nav-link categories">Categories</NavLink></li>
        </ul>
      </nav>
      <Outlet />
      <footer />
    </>
  );
}
