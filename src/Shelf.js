import React, {Component} from 'react';
import Book from './Book';

class Shelf extends Component{


    render(){
        const {handleOnChange, books,title} = this.props;

        const showbooks = books.filter((book) => book.shelf === this.props.title.replace(/ +/g, ""));

        return(
            <div className="bookshelf">
                <h4 className="bookshelf-title">{title}</h4>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {
                            showbooks.map((book) => (

                                    <li key={book.id}>

                                        <Book
                                        book={book}
                                        handleOnChange={handleOnChange}
                                        />





                                    </li>


                                )
                            )
                        }


                    </ol>

                </div>
            </div>
        )
    }
}

export default Shelf;