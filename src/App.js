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

        });
        console.log(this.state.books);
    }


    updateBook = (book, value) => {

        value = value.target.value.trim();


        BooksApi.update(book, value).then(res => {


            if (value === 'none') {
                this.setState({
                    books: this.state.books.filter((b) => b.id !== book.id)
                })
            } else {

                this.setState({
                    books: this.state.books.map((b) =>{

                        if(book.id===b.id){
                            return {...book,shelf:value}

                        }
                        else{
                            return b
                        }
                    })
                })
            }


            // this.setState(state => ({
            //
            //         books: this.state
            //
            //     })
            // )

        });

        //
        // BooksApi.get(book.id).then(res=>{
        //     console.log(res);
        // })

        // console.log(this.state);


        // if(e.target.value === 'wantToRead'){
        //     alert('hey your book'+book.title+' has been added to your bookshelve '+e.target.value);
        // }


    };


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
                        books={this.state.books}
                        handleOnChange={this.updateBook}


                    />
                )}/>


            </div>
        )
    }
}

export default BooksApp
