import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { displayBooks } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();
  dispatch(displayBooks());
  const books = useSelector((state) => state.books);
  return (
    <section id="books-page">
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <hr />
    </section>
  );
};
export default BooksList;
