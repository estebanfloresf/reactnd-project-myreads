import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'


class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,

    };


    render() {
        const {handleOnChange, books} = this.props;

        const shelves = ['currently Reading', 'want To Read', 'read'];


        return (




            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>


                <div className="list-books-content">
                        <div>


                            {shelves.map((shelf) => (
                                <div key={shelf}>
                                    <Shelf

                                        books={books}
                                        title={shelf}
                                        handleOnChange={handleOnChange}
                                    />
                                </div>

                            ))}


                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>



                    </div>


                </div>



        );
    }
}

export default ListBooks;