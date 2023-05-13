import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';
import style from '../styles/BookList.module.css';

export default function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { books, status } = useSelector((state) => state.books);
  return (
    <>
      {status === 'pending' && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {status === 'idle' && (
        <div className={style['list-container']}>
          {books.map(({
            itemId, title, author, category,
          }) => (
            <Book
              key={itemId}
              itemId={itemId}
              title={title}
              author={author}
              category={category}
            />
          ))}
        </div>
      )}
    </>
  );
}
