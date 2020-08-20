import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand ml-5" to="/">
                    <img src={logo} alt="logo" style={{ width: '35px' }}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="fas fa-bars" style={{ color: '#fff' }}/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">Events&nbsp;
                                <i className="fas fa-home"/><span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/speakers">
                                Speakers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;