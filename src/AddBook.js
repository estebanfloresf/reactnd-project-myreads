import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksApi from './BooksAPI'
import Book from './Book';


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
                BooksApi.search(query, 10)
                    .then((querybooks) => {


                        if(querybooks.error){
                            this.setState({querybooks:[]})
                        }
                        else{

                            this.setState({querybooks});

                        }

                    })

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
                                        <Book
                                            book={book}
                                            handleOnChange={handleOnChange}
                                        />
                                    </li>

                                )
                            )
                        )}
                        {showingBooks.length === 0 && query &&(
                            <div>
                                Sorry, no results found for your search. Try any of the following  <a href="https://github.com/estebanfloresf/reactnd-project-myreads/blob/master/SEARCH_TERMS.md">Terms</a>

                            </div>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default AddBook;