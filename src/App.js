import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books: []
    };


    componentDidMount() {

        BooksApi.getAll().then((books) => {
            this.setState({books});

        })
    }


    updateBook = (book) => {


        console.log(book);


        // this.setState((state) => ({
        //     books: state.books.filter()
        //  }));



    };

    handleOnChange(e) {
        console.log(e.target.value);

    }


    render() {

        return (
            <div className="app">

                <Route exact path="/" component={ListBooks}/>

                <Route exact path="/search" render={() => (
                    <AddBook
                        books={this.state.books}
                        handleOnChange={this.handleOnChange.bind(this)}

                    />
                )}/>


            </div>
        )
    }
}

export default BooksApp
