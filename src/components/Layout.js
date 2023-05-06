import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import style from '../styles/Layout.module.css';

export default function Layout() {
  return (
    <>
      <Navigation />
      <div className={style['main-container']}>
        <Outlet />
      </div>
    </>
  );
}
