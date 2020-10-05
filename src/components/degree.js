/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { ModelContext } from './context';

function Degree() {
    const context = useContext(ModelContext);
    let strClass = 'list-dropdown-content list';

    return (
        <>
            <section id="programs" className="programs">
                <h2 className='pick'>اختر الحرم الجامعي أدناه، ثم اختر إسم الكلية للإطلاع على التخصصات المتوفرة فيها. وللإطلاع على الخطط الإسترشادية، اختر التخصص المراد من القائمة.</h2>

                <div className='btn-container'>
                    <button className='amman-btn campus-btn' onClick={() => { $('.amman-container').fadeIn(); $('.irbid-container').fadeOut(); $('.amman-btn').addClass('clicked'); $('.irbid-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>عمان</button>
                    <button className='irbid-btn campus-btn' onClick={() => { $('.irbid-container').fadeIn(); $('.amman-container').fadeOut(); $('.irbid-btn').addClass('clicked'); $('.amman-btn').removeClass('clicked'); $('.program-button').fadeIn(); }}>إربد</button>
                </div>

                <div id='amman-container' className='amman-container'>
                    <div className='amman'>
                        <div className="left">

                            <h3 key={context.mainData.program.amman.firstProgram.id}>{context.mainData.program.amman.firstProgram.bachelors}</h3>

                            <ul>
                                {context.mainData.program.amman.firstProgram.bachelorsSpecialties.map((item, i) => (
                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.amman.firstProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.amman.firstProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc a-sdc-2 program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>

                            <h3>{context.mainData.program.amman.scandProgram.InternationalDiploma}</h3>

                            <ul>
                                {context.mainData.program.amman.scandProgram.InternationalDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.amman.scandProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.amman.scandProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className="right">
                            <h3>{context.mainData.program.amman.thirdProgram.middleDiploma}</h3>

                            <ul>
                                {context.mainData.program.amman.thirdProgram.middleDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.amman.thirdProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.amman.thirdProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>

                            <h3>{context.mainData.program.amman.fourthProgram.TechnicalDiploma}</h3>

                            <ul>
                                {context.mainData.program.amman.fourthProgram.TechnicalDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.amman.fourthProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.amman.fourthProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='irbid-container' className='irbid-container'>
                    <div className='irbid'>
                        <div className="left">

                            <h3>{context.mainData.program.irbid.scandProgram.InternationalDiploma}</h3>

                            <ul>
                                {context.mainData.program.irbid.scandProgram.InternationalDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.irbid.scandProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.irbid.scandProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className="right">
                            <h3>{context.mainData.program.irbid.thirdProgram.middleDiploma}</h3>

                            <ul>
                                {context.mainData.program.irbid.thirdProgram.middleDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.irbid.thirdProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.irbid.thirdProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>

                            <h3>{context.mainData.program.irbid.fourthProgram.TechnicalDiploma}</h3>

                            <ul>
                                {context.mainData.program.irbid.fourthProgram.TechnicalDiplomaSpecialties.map((item, i) => (

                                    <div key={i}>
                                        <h5 onClick={() => $(`.list${context.mainData.program.irbid.fourthProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                        <ul className={strClass + context.mainData.program.irbid.fourthProgram.id + i}>
                                            {item.collageList.map((element, index) => (
                                                <li key={index} className="a-sdc program-link">
                                                    {element.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={element.link}>{element.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{element.name}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <a target='_blank' rel="noopener noreferrer" className='program-button' href={context.mainData.aboutUsContant.aboutUsContantLink.link}>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>

            </section>
        </>
    );
}

export default Degree;