import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksApi from './BooksAPI'


class AddBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,

    };

    state = {
        query: '',
        bookshelve: 'none',
        querybooks: []
    };


    updateQuery = (query) => {
        this.setState(
            {query: query.trim()},

            this.calllSearch(this.state.query)
        );

    };

    calllSearch(query) {


        BooksApi.search(query, 10).then((querybooks) => {
            this.setState({querybooks});
        })

    }

    // componentDidMount() {
    //
    //     BooksApi.search(this.state.query, 10).then((querybooks) => {
    //         this.setState({querybooks});
    //
    //     })
    // }


    render() {

        const querybooks = this.state.querybooks;
        const {query} = this.state;

        let showingBooks;

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');

            if (querybooks && querybooks.length > 0) {


                try {
                    showingBooks = querybooks.filter((book) => match.test(book.title) || match.test(book.authors.toString()));

                }catch(err){
                    showingBooks = querybooks.filter((book) => match.test(book.title) );
                }
                console.log(showingBooks);


                showingBooks.sort(sortBy('title'));
            }


        } else {

            showingBooks = querybooks

        }


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
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">


                        {showingBooks && (
                            showingBooks.map((book) => (
                                    <li key={book.id}>


                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                }}/>
                                                <div className="book-shelf-changer">
                                                    <select value={this.state.bookshelve}
                                                            onChange={(event) => this.handleChange(event.target.value)}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>

                                            {/*<div className="book-authors">{book.authors.toString()}</div>*/}
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