import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class noMatch extends Component {
    render() {
        return (

            <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
                <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">My Reads</span>
                        <div className="mdl-layout-spacer"/>

                    </div>
                </header>
                <div className="demo-ribbon"></div>
                <main className="demo-main mdl-layout__content">
                    <div className="demo-container mdl-grid">
                        <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                        <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                            <div className="demo-crumbs mdl-color-text--grey-500">
                               <h2>404 Error</h2>
                            </div>
                            <h3>Whoops! we couldn't find that page</h3>


                                <Link to="/" className="mdl-button mdl-js-button mdl-button--raised" >Return to Home Page</Link>


                        </div>
                    </div>
                    <footer className="demo-footer mdl-mini-footer">
                        <div className="mdl-mini-footer--left-section">
                            <ul className="mdl-mini-footer--link-list">
                                <li><Link to="/">Udacity - MyReads Project</Link></li>

                            </ul>
                        </div>
                    </footer>
                </main>
            </div>

    )
    }
    }

    export default noMatch;