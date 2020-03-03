import React from "react";
import './BooksContainer.scss';
import { connect } from 'react-redux';
import Book from '../Book/Book';

export function BooksContainer (props) {

    const { books } = props;

    return (
        <div className="BooksContainer">
            { books.map(book => {
                return <div key={book.id}>
                    <Book book={book} />
                </div>
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, null)(BooksContainer);