import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <header>
      <div className={styles['nav-wrapper']}>
        <h2>Bookstore CMS</h2>
        <nav>
          <ul className={styles['nav-links']}>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile">
        <i className="material-symbols-outlined">account_circle</i>
      </div>
    </header>
  );
}
