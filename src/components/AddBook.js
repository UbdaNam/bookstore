import React from 'react';
import style from '../styles/AddBook.module.css';

export default function AddBook() {
  return (
    <div className={style['form-container']}>
      <h2>ADD NEW BOOK</h2>
      <form className={style['add-form']}>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book author" />
        <select name="category">
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
