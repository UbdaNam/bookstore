import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import style from '../styles/Book.module.css';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <div className="card-info">
        <span>{category}</span>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <div className="btn-container">
          <button type="button">comments</button>
          <button type="button" onClick={() => dispatch(removeBook(itemId))}>
            Remove
          </button>
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

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
