/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import { ModelContext } from './context.js';

function Header() {
    const context = useContext(ModelContext);

    // const If = props => {
    //     return props.condition ? props.children : null;
    // };

    const getData = page => {
        console.log('here', context.lang);
        if (context.lang === 'Arabic') {
            $('.translation').addClass('arabic');
        } else {
            $('.translation').removeClass('arabic');
        }
        $.ajax({
            type: 'get',
            url: `./data/${page}.json`,
            data: 'data',
            dataType: 'json',
            success: function (res) {
                context.changeHeaderData(res.header);
                context.changeMainData(res.main);
                context.changeFooterData(res.footer);
                context.changeLang(res.language);
            },
        });

    };

    useEffect(() => {
        $('.main-nav-mobile').hide();
        $('.sub-dropdown-content').hide();
    });

    const test = () => {
        console.log('hhh', context.headerData);
        console.log('mmm', context.mainData);
        console.log('fff', context.footerData);
    };

    useEffect(() => {
        var i = 0;
        carousel();

        function carousel() {
            let slide = document.getElementsByClassName('s1');
            slide[0].style.marginLeft = -i * 25 + '%';
            i++;
            if (i === 4) {
                i = 0;
            }
            setTimeout(carousel, 5000);
        }

        $('.bar').on('click', function (e) {
            i = e.target.id - 1;
            let slide = document.getElementsByClassName('s1');
            slide[0].style.marginLeft = -i * 25 + '%';
        });

    }, []);


    return (
        <>
            <header>
                <img onClick={test} className="logo" src={context.headerData.logo} alt="" />
                <a href="#/" onClick={() => $('.main-nav-mobile').fadeToggle(200)} className="icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
                <nav className="main-nav-mobile">
                    <ul>
                        <li><a href="#slideShow">{context.headerData.nav.home}</a></li>
                        <li><a href="#aboutUs-section">{context.headerData.nav.aboutUs}</a></li>
                        <li><a href="#programs">{context.headerData.nav.programs}</a></li>
                        <li className="dropdown sub-dropdown"><button onClick={() => $('.sub-dropdown-content').fadeToggle(200)} className="dropbtn sub-dropdown-btn" type="scall">{context.headerData.nav.studentServicesHeader}<i className="fa fa-caret-down"></i></button></li>
                        <li className="sub-dropdown-content" >
                            <a className="a-sdc" href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                            <a className="a-sdc" href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                            <a className="a-sdc" href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                        </li>
                        <li><a href="#footer">{context.headerData.nav.contactUs.text}</a></li>
                        <li className='arabic'><a href="#/" onClick={() => getData(context.lang)}>{context.lang}&nbsp;<i className="fa fa-globe"></i></a></li>
                    </ul>
                </nav>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#slideShow">{context.headerData.nav.home}</a></li>
                        <li><a href="#aboutUs-section">{context.headerData.nav.aboutUs}&nbsp;</a></li>
                        <li><a href="#aboutUs-part-2">{context.headerData.nav.programs}</a></li>
                        <li className="dropdown"><button className="dropbtn" type="scall">{context.headerData.nav.studentServicesHeader}<i className="fa fa-caret-down"></i></button>
                            <div className="dropdown-content">
                                <a href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                                <a href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                                <a href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                            </div>
                        </li>
                        <li><a href="#footer">{context.headerData.nav.contactUs.text}</a></li>
                        <li className="translation arabic"><a href="#/" onClick={() => getData(context.lang)}>{context.lang === 'Arabic' ? 'العربية' : context.lang}&nbsp;<i className="fa fa-globe"></i></a></li>
                    </ul>
                </nav>
            </header>
            <section id="slideShow" className="slideShow">
                <div className="slidershow middle">

                    <div className="slides">
                        <input type="radio" name="r" id="r1" />
                        <input type="radio" name="r" id="r2" />
                        <input type="radio" name="r" id="r3" />
                        <input type="radio" name="r" id="r4" />
                        <div className="slide s1">
                            <div className="card">
                                <img src="../assets/ready_orange.png" alt="" />
                                <img src="../assets/1.png" alt="" />
                                <img src="../assets/text1.png" alt="" />
                                <a className="touch" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_purple.png" alt="" />
                                <img src="../assets/2.png" alt="" />
                                <img src="../assets/text2.png" alt="" />
                                <a className="touch" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_orange.png" alt="" />
                                <img src="../assets/3.png" alt="" />
                                <img src="../assets/text3.png" alt="" />
                                <a className="touch" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_orange.png" alt="" />
                                <img src="../assets/4.png" alt="" />
                                <img src="../assets/4-1.png" alt="" />
                                <a className="touch" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                    </div>

                    <div className="navigation">
                        <label htmlFor="r1" className="bar" id="1"></label>
                        <label htmlFor="r2" className="bar" id="2"></label>
                        <label htmlFor="r3" className="bar" id="3"></label>
                        <label htmlFor="r4" className="bar" id="4"></label>
                    </div>
                </div>

                <a href="https://m.me/LTUC.JO"><img className="chat" src="./assets/chat2-removebg-preview.png" alt="" /></a>
            </section>
        </>
    );
}

export default Header;