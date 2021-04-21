import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
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
                <Link to={"/add_song"} className="nav-link">
                Add Song
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/library"} className="nav-link">
                Library
                </Link>
            </li>
            </div>
        </nav>

        <div className="container mt-3">
            <Switch>
            {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} /> */}
            </Switch>
        </div>
        </div>
    )
}

export default Header
