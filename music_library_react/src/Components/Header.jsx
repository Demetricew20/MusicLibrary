import React from "react";
import {  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './Header.css'


function Header() {

    return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
            Music Player
            </a>
            <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/library"} className="nav-link">
                Library
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
