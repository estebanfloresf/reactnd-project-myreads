import React, {Component} from 'react';

class Book extends Component {

    render() {
        const {book, handleOnChange} = this.props;
        return (

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
                    className="book-authors">{book.authors ? book.authors.join(', ') : ''}
                </div>





            </div>





        )
    }

}


export default Book;