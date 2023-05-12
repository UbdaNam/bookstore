import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="list-container">
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
  );
}
