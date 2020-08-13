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
                <div className="left">

                    <h3 key={context.mainData.program.firstProgram.id}>{context.mainData.program.firstProgram.bachelors}</h3>

                    <ul>
                        {context.mainData.program.firstProgram.bachelorsSpecialties.map((item, i) => (
                            <div key={i}>
                                <h5 onClick={() => $(`.list${context.mainData.program.firstProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                <ul className={strClass + context.mainData.program.firstProgram.id + i}>
                                    {item.collageList.map((element, index) => (
                                        <li key={index} className="a-sdc a-sdc-2 program-link">
                                            <a download={element.name.replace(/ /g, '-') + '.pdf'} href={element.link}>{element.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </ul>

                    <h3>{context.mainData.program.scandProgram.InternationalDiploma}</h3>

                    <ul>
                        {context.mainData.program.scandProgram.InternationalDiplomaSpecialties.map((item, i) => (

                            <div key={i}>
                                <h5 onClick={() => $(`.list${context.mainData.program.scandProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                <ul className={strClass + context.mainData.program.scandProgram.id + i}>
                                    {item.collageList.map((element, index) => (
                                        <li key={index} className="a-sdc program-link">
                                            <a download={element.name.replace(/ /g, '-') + '.pdf'} href={element.link}>{element.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="right">
                    <h3>{context.mainData.program.thirdProgram.middleDiploma}</h3>

                    <ul>
                        {context.mainData.program.thirdProgram.middleDiplomaSpecialties.map((item, i) => (

                            <div key={i}>
                                <h5 onClick={() => $(`.list${context.mainData.program.thirdProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                <ul className={strClass + context.mainData.program.thirdProgram.id + i}>
                                    {item.collageList.map((element, index) => (
                                        <li key={index} className="a-sdc program-link">
                                            <a download={element.name.replace(/ /g, '-') + '.pdf'} href={element.link}>{element.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </ul>

                    <h3>{context.mainData.program.fourthProgram.TechnicalDiploma}</h3>

                    <ul>
                        {context.mainData.program.fourthProgram.TechnicalDiplomaSpecialties.map((item, i) => (

                            <div key={i}>
                                <h5 onClick={() => $(`.list${context.mainData.program.fourthProgram.id}${i}`).slideToggle(300)}>{item.collageName}</h5>
                                <ul className={strClass + context.mainData.program.fourthProgram.id + i}>
                                    {item.collageList.map((element, index) => (
                                        <li key={index} className="a-sdc program-link">
                                            <a download={element.name.replace(/ /g, '-') + '.pdf'} href={element.link}>{element.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </ul>
                </div>
                <a target='_blank' rel="noopener noreferrer" className='program-button' href={context.mainData.aboutUsContant.aboutUsContantLink.link}>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>

            </section>
        </>
    );
}

export default Degree;