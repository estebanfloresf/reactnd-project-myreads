import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksApi from './BooksAPI'


class AddBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,

    };

    state = {
        query: '',
        querybooks: []
    };


    updateQuery = (query) => {
        this.setState(
            {query: query},
            () => {
                BooksApi.search(query, 10).then((querybooks) => {
                    this.setState({querybooks});
                });
            }
        );

    };


    loadList = function (query) {


        if (query) {


            const showingBooks = this.state.querybooks;

            if (showingBooks && showingBooks.length > 0) {

                this.props.books.forEach(function (book) {

                    for (let i = 0; i < showingBooks.length; i++) {
                        if (showingBooks[i].id === book.id) {
                            showingBooks[i]['shelf'] = book.shelf
                        }
                    }
                });

                return showingBooks;
            }


        }


        return []


    };


    render() {

        const {query} = this.state;
        const {handleOnChange} = this.props;
        let showingBooks = this.loadList(query);

        return (



            <div className="search-books">



                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>

                    <div className="search-books-input-wrapper">
                        {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}


                        <input
                            className="mdl-textfield__input"
                            id="sample1"
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />


                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">


                        {showingBooks.length > 0 && (
                            showingBooks.map((book) => (
                                    <li key={book.id}>


                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'})`
                                                }}/>
                                                <div className="book-shelf-changer">





                                                    <select onChange={(e) => handleOnChange(book, e)}
                                                            value={book.shelf ? book.shelf : 'none'}>
                                                        <option value="disabled" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>

                                            <div
                                                className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                                        </div>

                                    </li>

                                )
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }

}

export default AddBook;