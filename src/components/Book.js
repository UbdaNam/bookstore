import React from 'react';
import style from '../styles/Book.module.css';

export default function Book() {
  return (
    <div className={style.card}>
      <div className="card-info">
        <span>Action</span>
        <h2>The Hunger Games</h2>
        <h4>Suzanne Collins</h4>
        <div className="btn-container">
          <button type="button">comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style['card-status']}>
        <div className="percentage">Stat percentage</div>
        |
        <div className="chapter">
          <span>Current Chapter</span>
          <h4>Chapter 17</h4>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}
