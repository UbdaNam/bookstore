import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/AddBook.module.css';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author, category }));
    }
  };
  return (
    <div className={style['form-container']}>
      <h2>ADD NEW BOOK</h2>
      <form className={style['add-form']}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book author"
          required
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
