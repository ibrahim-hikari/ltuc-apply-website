/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import { ModelContext } from './context.js';

function Header() {
    const context = useContext(ModelContext);

    // const If = props => {
    //     return props.condition ? props.children : null;
    // };

    // const getData = page => {
    //     console.log('here', context.lang);
    //     if (context.lang === 'Arabic') {
    //         $('.translation').addClass('arabic');
    //     } else {
    //         $('.translation').removeClass('arabic');
    //     }
    //     $.ajax({
    //         type: 'get',
    //         url: `./data/${page}.json`,
    //         data: 'data',
    //         dataType: 'json',
    //         success: function (res) {
    //             context.changeHeaderData(res.header);
    //             context.changeMainData(res.main);
    //             context.changeFooterData(res.footer);
    //             context.changeLang(res.language);
    //         },
    //     });

    // };

    useEffect(() => {
        $('.main-nav-mobile').hide();
        $('.sub-dropdown-content').hide();
        $('.list-dropdown-content').hide();
    });

    const test = () => {
        console.log('hhh', context.headerData);
        console.log('mmm', context.mainData);
        console.log('fff', context.footerData);
    };

    useEffect(() => {
        var i = 0;
        // let colors = ['#154579', '#5E2F90', '#2E8178', '#E21F49', '#388BC5', '#A3258D'];
        let chatIcon = document.querySelector('.chat').children[0];
        carousel();
        // console.log('chat', chatIcon.style.color);

        function carousel() {
            let slide = document.getElementsByClassName('s1');
            let dot = document.querySelector(`#r${i + 1}`);
            slide[0].style.marginLeft = -i * (100 / 6) + '%';
            console.log('dot navigation', dot);
            dot.style.background = '#ffffff';
            // console.log('dot navigation', dot.style.background);
            // chatIcon.style.color = colors[i];
            i++;
            if (i === 6) {
                i = 0;
            }
            setTimeout(carousel, 5000);
        }

        $('.bar').on('click', function (e) {
            i = e.target.id - 1;
            let slide = document.getElementsByClassName('s1');
            slide[0].style.marginLeft = -i * (100 / 6) + '%';
        });

        function calcVH() {
            var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            document.querySelector('.slideShow').setAttribute('style', 'height:' + vH + 'px;');
            // console.log('vh', vH);
        }

        calcVH();
        window.addEventListener('onorientationchange', calcVH, true);


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
                        <li><a onClick={() => $('.main-nav-mobile').fadeOut(200)} href="#slideShow">{context.headerData.nav.home}</a></li>
                        <li><a onClick={() => $('.main-nav-mobile').fadeOut(200)} href="#aboutUs-section">{context.headerData.nav.aboutUs}</a></li>
                        <li><a href="#programs" onClick={() => { $('.amman-container').fadeIn(); $('.irbid-container').fadeOut(); $('.main-nav-mobile').fadeOut(200); $('.amman-btn').addClass('clicked'); $('.irbid-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>{context.headerData.nav.programs[0]}</a></li>
                        <li><a href="#programs" onClick={() => { $('.irbid-container').fadeIn(); $('.amman-container').fadeOut(); $('.main-nav-mobile').fadeOut(200); $('.irbid-btn').addClass('clicked'); $('.amman-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>{context.headerData.nav.programs[1]}</a></li>
                        <li className="dropdown sub-dropdown"><button onClick={() => $('.sub-dropdown-content').fadeToggle(200)} className="dropbtn sub-dropdown-btn" type="scall">{context.headerData.nav.studentServicesHeader}<i className="fa fa-caret-down"></i></button></li>
                        <li className="sub-dropdown-content" >
                            <a target='_blank' rel="noopener noreferrer" className="a-sdc analytics-button" href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                            <a target='_blank' rel="noopener noreferrer" className="a-sdc analytics-button" href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                            <a target='_blank' rel="noopener noreferrer" className="a-sdc analytics-button" href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                        </li>
                        <li><a onClick={() => $('.main-nav-mobile').fadeOut(200)} className='click-close' href="#footer">{context.headerData.nav.contactUs.text}</a></li>
                        {/* <li className='arabic'><a href="#/" onClick={() => getData(context.lang)}>{context.lang === 'Arabic' ? 'العربية' : context.lang}&nbsp;<i className="fa fa-globe"></i></a></li> */}
                    </ul>
                </nav>
                <nav className="main-nav">
                    <ul>
                        <li><a className='main-link' href="#slideShow">{context.headerData.nav.home}</a></li>
                        <li><a className='main-link' href="#aboutUs-section">{context.headerData.nav.aboutUs}&nbsp;</a></li>
                        <li><a className='main-link' href="#programs" onClick={() => { $('.amman-container').fadeIn(); $('.irbid-container').fadeOut(); $('.amman-btn').addClass('clicked'); $('.irbid-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>{context.headerData.nav.programs[0]}</a></li>
                        <li><a className='main-link' href="#programs" onClick={() => { $('.irbid-container').fadeIn(); $('.amman-container').fadeOut(); $('.irbid-btn').addClass('clicked'); $('.amman-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>{context.headerData.nav.programs[1]}</a></li>
                        <li className="dropdown">
                            <button className="dropbtn" type="scall">{context.headerData.nav.studentServicesHeader}</button>
                            <div className="dropdown-content">
                                <a className='analytics-button' target='_blank' rel="noopener noreferrer" href="https://sisportal-100533.campusnexus.cloud/CMCPortal/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100533.campusnexus.cloud%2fCMCPortal%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMCPortal%252fsecure%252fstaff%252fstaportal.aspx&wct=2020-05-07T13%3a03%3a17Z">{context.headerData.nav.studentServices.selfServicePortal}</a>
                                <a className='analytics-button' target='_blank' rel="noopener noreferrer" href="https://online.ltuc.com/d2l/home">{context.headerData.nav.studentServices.desireToLearn}</a>
                                <a className='analytics-button' target='_blank' rel="noopener noreferrer" href="https://employmenthub.ltuc.com">{context.headerData.nav.studentServices.EducationForEmployment}</a>
                            </div>
                        </li>
                        <li><a className='main-link' href="#footer">{context.headerData.nav.contactUs.text}</a></li>
                        {/* <li className="translation arabic"><a href="#/" onClick={() => getData(context.lang)}>{context.lang === 'Arabic' ? 'العربية' : context.lang}&nbsp;<i className="fa fa-globe"></i></a></li> */}
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
                        <input type="radio" name="r" id="r5" />
                        <input type="radio" name="r" id="r6" />

                        <div className="slide s1">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_1.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide s2">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_2.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide s3">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_3.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide s4">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_4.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide s5">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_5.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>
                        <div className="slide s6">
                            <div className="card">
                                <div className='future'>
                                    <span>لأنك</span>
                                    <span>المستقبل</span>
                                </div>
                                <img src="../assets/Slide_6.png" alt="" />
                                <span className='with-you'>إحنا معك</span>
                                <a target='_blank' className="touch" rel="noopener noreferrer" href={context.headerData.nav.contactUs.link}>{context.headerData.nav.contactUs.text}</a>
                            </div>
                        </div>

                    </div>

                    <div className="navigation">
                        <label htmlFor="r1" className="bar" id="1"></label>
                        <label htmlFor="r2" className="bar" id="2"></label>
                        <label htmlFor="r3" className="bar" id="3"></label>
                        <label htmlFor="r4" className="bar" id="4"></label>
                        <label htmlFor="r5" className="bar" id="5"></label>
                        <label htmlFor="r6" className="bar" id="6"></label>
                    </div>
                </div>
                <a target='_blank' rel="noopener noreferrer" className='chat' href="https://m.me/LTUC.JO"><i className='fas fa-comment'></i></a>

            </section>
        </>
    );
}

export default Header;