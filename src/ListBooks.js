import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        // onDeleteContact: PropTypes.func.isRequired
    };



    render() {
        const {handleOnChange, books} = this.props;

        const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        const read = books.filter((book) => book.shelf === 'read');


        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>



                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h3 className="bookshelf-title">Currently Reading</h3>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {
                                        currentlyReading.map((book) => (

                                                <li key={book.id}>


                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{
                                                                width: 128,
                                                                height: 193,
                                                                backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})`
                                                            }}/>
                                                            <div className="book-shelf-changer">
                                                                <select onChange={(e) => handleOnChange(book, e)}
                                                                        value={book.shelf ? book.shelf : 'none'}>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>

                                                        <div
                                                            className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
                                                    </div>

                                                </li>


                                            )
                                        )
                                    }


                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h3 className="bookshelf-title">Want to Read</h3>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {
                                        wantToRead.map((book) => (

                                                <li key={book.id}>


                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{
                                                                width: 128,
                                                                height: 193,
                                                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                            }}/>
                                                            <div className="book-shelf-changer">
                                                                <select onChange={(e) => handleOnChange(book, e)}
                                                                        value={book.shelf}>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>

                                                        <div
                                                            className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
                                                    </div>

                                                </li>


                                            )
                                        )
                                    }


                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h3 className="bookshelf-title">Read</h3>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {
                                        read.map((book) => (

                                                <li key={book.id}>


                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{
                                                                width: 128,
                                                                height: 193,
                                                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                            }}/>
                                                            <div className="book-shelf-changer">
                                                                <select onChange={(e) => handleOnChange(book, e)}
                                                                        value={book.shelf}>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>

                                                        <div
                                                            className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
                                                    </div>

                                                </li>


                                            )
                                        )
                                    }


                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>

            </div>

        );
    }
}

export default ListBooks;