import React from "react";
import {  Link } from "react-router-dom";
import {MusicNoteBeamed} from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';


function Header() {

    return (
        <div className='header'>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/home" className="navbar-brand">
            <MusicNoteBeamed  size={50} />
            </a>
            <div className="navbar-nav mr-auto">
            <li className="nav-item" >
                <Link to={"/library"} className="nav-link" >
                <h2>Library</h2>
                </Link>
            </li>
            </div>
        </nav>

        <div className="container mt-3">
        </div>
        </div>
    )
}

export default Header
