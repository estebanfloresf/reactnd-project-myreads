import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books: [],
        bookshelve: 'none'
    };


    componentDidMount() {

        BooksApi.getAll().then((books) => {
            this.setState({books});

        })
    }


    updateBook = (book,value) => {




        BooksApi.update(book,value.target.value).then();

        console.log(this.state.books);



        // if(e.target.value === 'wantToRead'){
        //     alert('hey your book'+book.title+' has been added to your bookshelve '+e.target.value);
        // }

        // this.setState({
        //     bookshelve: e.target.value.trim()
        // });
        // console.log(value.target.value);
        // console.log(typeof( value.target.value));
        //
        //



    };

    // handleOnChange(book,e) {
    //     console.log(book);
    //     // console.log(e.target);
    //
    // }


    render() {

        return (
            <div className="app">

                <Route exact path="/" render={() => (
                    <ListBooks
                        books={this.state.books}
                        handleOnChange={this.updateBook}


                    />
                )}/>

                <Route exact path="/search" render={() => (
                    <AddBook
                        bookshelve={this.state.bookshelve}
                        handleOnChange={this.updateBook}


                    />
                )}/>


            </div>
        )
    }
}

export default BooksApp
