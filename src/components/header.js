/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import { ModelContext } from './context.js';

function Header() {
    const context = useContext(ModelContext);

    useEffect(() => {
        $('.main-nav-mobile').hide();
        $('.sub-dropdown-content').hide();
    });

    return (
        <>
            <header>
                <img className="logo" src={context.headerData.logo} alt="" />
                <a href="#/" onClick={() => $('.main-nav-mobile').fadeToggle(200)} className="icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
                <nav className="main-nav-mobile">
                    <ul>
                        <li><a onClick={() => $('.main-nav-mobile').fadeOut(200)} href="#slideShow">{context.headerData.nav.home}</a></li>
                    </ul>
                </nav>
                <nav className="main-nav">
                    <ul>
                        <li><a className='main-link' href="#slideShow">{context.headerData.nav.home}</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;