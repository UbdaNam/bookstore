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
      <div className={style['card-info']}>
        <span>{category}</span>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <div className={style['btn-container']}>
          <button type="button">Comments</button>
          <span className={style['btn-divider']} />
          <button type="button" onClick={() => dispatch(removeBook(itemId))}>
            Remove
          </button>
          <span className={style['btn-divider']} />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style['card-status']}>
        <div className={style.progress}>
          <div className={style.circle} />
          <div>
            <p className={style.percentage}>64%</p>
            <p className={style.status}>completed</p>
          </div>
        </div>
        <span className={style.divider} />
        <div className={style.chapter}>
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
