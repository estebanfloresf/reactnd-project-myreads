import React from 'react'
import '../node_modules/material-design-lite/material.min.css'
import '../node_modules/material-design-lite/material.min.js'
import './App.css'

import {Switch,Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import noMatch from './noMatch'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        BooksApi.getAll().then((books) => {
            this.setState({books});
        });
    }

    updateBook = (book, value) => {
        value = value.target.value.trim();

        BooksApi.update(book, value).then(res => {

            book['shelf'] = value;

            if (value === 'none') {
                this.setState({
                    books: this.state.books.filter((b) => b.id !== book.id)
                })
            } else {

                this.setState(previousState => ({

                    books: previousState.books.filter(b=> b.id !== book.id).concat([book])
                }));

            }

        });
    };

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (
                        <ListBooks
                            books={this.state.books}
                            handleOnChange={this.updateBook}
                        />
                    )}/>

                    <Route exact path="/search" render={() => (
                        <AddBook
                            books={this.state.books}
                            handleOnChange={this.updateBook}
                        />
                    )}/>

                    <Route component={noMatch}/>

                </Switch>

            </div>
        )
    }
}

export default BooksApp
