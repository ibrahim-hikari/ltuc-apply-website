import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import { ModelContext } from './context.js';

function Header() {
    const context = useContext(ModelContext);

    // const If = props => {
    //     return props.condition ? props.children : null;
    // };

    const getData = page => {
        console.log('here');
        $.ajax({
            type: 'get',
            url: `./data/${page}.json`,
            data: 'data',
            dataType: 'json',
            success: function (res) {
                context.changeHeaderData(res.header);
                context.changeMainData(res.main);
                context.changeFooterData(res.footer);
            },
        });
    };

    useEffect(() => {
        getData('arabic');
        $('.main-nav-mobile').hide();
        $('.sub-dropdown-content').hide();
    }, []);

    const test = () => {
        console.log('hhh', context.headerData);
        console.log('mmm', context.mainData);
        console.log('fff', context.footerData);
    };

    return (
        <header>
            <img onClick={test} className="logo" src={context.headerData.logo} alt="" />
            <a onClick={() => $('.main-nav-mobile').fadeToggle(200)} className="icon">
                <div></div>
                <div></div>
                <div></div>
            </a>
            <nav className="main-nav-mobile">
                <ul>
                    <li><a href="#section-one">{context.headerData.nav.home}</a></li>
                    <li><a href="#section-two">{context.headerData.nav.aboutUs}</a></li>
                    <li><a href="#section-four">{context.headerData.nav.programs}</a></li>
                    <li className="dropdown sub-dropdown"><button onClick={() => $('.sub-dropdown-content').fadeToggle(200)} className="dropbtn sub-dropdown-btn" type="scall">{context.headerData.nav.studentServicesHeader}<i className="fa fa-caret-down"></i></button></li>
                    <li className="sub-dropdown-content" >
                        <a className="a-sdc" href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                        <a className="a-sdc" href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                        <a className="a-sdc" href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                    </li>
                    <li><a href="#footer">{context.headerData.nav.contactUs}</a></li>
                </ul>
            </nav>
            <nav onClick={() => getData('arabic')} className="main-nav">
                <ul>
                    <li><a href="#section-one">{context.headerData.nav.home}</a></li>
                    <li><a href="#section-two">{context.headerData.nav.aboutUs}</a></li>
                    <li><a href="#section-four">{context.headerData.nav.programs}</a></li>
                    <li className="dropdown"><button className="dropbtn" type="scall">{context.headerData.nav.studentServicesHeader}<i className="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                            <a href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                            <a href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                        </div>
                    </li>
                    <li><a href="#footer">{context.headerData.nav.contactUs}</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;