/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import { ModelContext } from './context';

function Content() {
    const context = useContext(ModelContext);

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
            <section id="section-one" className="section-one">
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
                                <a className="touch"
                                    href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                            معنا</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_purple.png" alt="" />
                                <img src="../assets/2.png" alt="" />
                                <img src="../assets/text2.png" alt="" />
                                <a className="touch"
                                    href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                            معنا</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_orange.png" alt="" />
                                <img src="../assets/3.png" alt="" />
                                <img src="../assets/text3.png" alt="" />
                                <a className="touch"
                                    href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                            معنا</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card">
                                <img src="../assets/ready_orange.png" alt="" />
                                <img src="../assets/4.png" alt="" />
                                <img src="../assets/4-1.png" alt="" />
                                <a className="touch"
                                    href="https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP">تواصل
                            معنا</a>
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
            <section id="section-two" className="section-two">
                {context.mainData.aboutUs.aboutUsFeatures.map(element => (
                    <>
                        <h3>{element.Feature}</h3>
                        <h4>{element.description}</h4>
                    </>
                ))}
                <a href={context.mainData.aboutUs.aboutUsLink.link}>{context.mainData.aboutUs.aboutUsLink.header}</a>
            </section>
            <section id="section-three" className="section-three">
                {context.mainData.aboutUsContant.aboutUsContantSections.map(element => (
                    <>
                        <h3>{element.Features ? element.Features : ' '}</h3>
                        <h4>{element.description}</h4>
                    </>
                ))}
                <a href={context.mainData.aboutUsContant.aboutUsContantLink.link}>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>
            </section>
            <section id="section-four" className="section-four">

                {/* {context.mainData.program.map(element => (
                    <div>
                        <h3>{element.header}</h3>
                        <ul>
                            {element.list ? element.list.map(item => (
                                <>
                                    <li>{item}</li>
                                </>
                            )) : ''}
                        </ul>
                        <a href={element.href.link}>{element.href.header}</a>
                    </div>
                ))} */}
                <div class="left">
                    <h3>{context.mainData.program.firstProgram.InternationalDiploma}</h3>
                    <ul>
                        {context.mainData.program.firstProgram.InternationalDiplomaSpecialties.map((item) =>(
                            <>
                                <li>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href={context.mainData.program.fifthProgram.href.link}>{context.mainData.program.fifthProgram.href.header}</a>
                    <h3>{context.mainData.program.scandProgram.TechnicalDiploma}</h3>
                    <ul>
                        {context.mainData.program.scandProgram.TechnicalDiplomaSpecialties.map(item => (
                            <>
                                <li>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href={context.mainData.program.scandProgram.href.link}>{context.mainData.program.scandProgram.href.header}</a>
                </div>

                <div class="right">
                    <h3>{context.mainData.program.thirdprogram.bachelors}</h3>
                    <ul>
                        {context.mainData.program.thirdprogram.bachelorsSpecialties.map(item => (
                            <>
                                <li>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href={context.mainData.program.thirdprogram.href.link}>{context.mainData.program.thirdprogram.href.header}</a>

                    <h3>{context.mainData.program.fourthProgram.LocalDiploma}</h3>
                    <ul>
                        {context.mainData.program.fourthProgram.LocalDiplomaSpecialties.map(item => (
                            <>
                                <li>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href={context.mainData.program.thirdprogram.href.link}>{context.mainData.program.thirdprogram.href.header}</a>
                    <h3>
                        {context.mainData.program.fifthProgram.TrainingCourses}
                    </h3>
                    <a href={context.mainData.program.fifthProgram.href.link}>{context.mainData.program.fifthProgram.href.header}</a>
                </div>
            </section>

        </>
    );

}
export default Content;