import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {

    return (
        <div className='header'>

            <Link to='/'>
            <img className='header__logo' src='' alt=''></img>
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
            </div>

            <div className='header__nav'>
                <div className='header__options'>
                    <span className='header__optionLineOne'>Hello! </span>
                    <span className='header__optionLineTwo'>Line2</span>
                </div>

            <Link to='/'>
                <div className='header__options'>
                    <span className='header__optionLineOne'>Line1</span>
                    <span className='header__optionLineTwo'>Line 2</span>
                </div>
            </Link>


                <div className='header__options'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Library</span>
                </div>

            </div>
        </div>
    )
}

export default Header
