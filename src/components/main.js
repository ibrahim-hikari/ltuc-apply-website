/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import { ModelContext } from './context';

function Content() {
    const context = useContext(ModelContext);

    return (
        <>
            <section id="aboutUs-section" className="aboutUs-section">
                {context.mainData.aboutUs.aboutUsFeatures.map((element, i) => (
                    <React.Fragment key={i}>
                        <h3 >{element.Feature}</h3>
                        <h4>{element.description}</h4>
                    </React.Fragment>
                ))}
                <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.aboutUs.aboutUsLink.header}</a>
            </section>
            <section id="aboutUs-part-2" className="aboutUs-part-2">
                {context.mainData.aboutUsContant.aboutUsContantSections.map((element, i) => (
                    <React.Fragment key={i}>
                        <h3 >{element.Features ? element.Features : ' '}</h3>
                        <h4>{element.description}</h4>
                    </React.Fragment>
                ))}
                <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>
            </section>
            <section id="programs" className="programs">
                <div className="left">
                    <h3>{context.mainData.program.firstProgram.InternationalDiploma}</h3>
                    <ul>
                        {context.mainData.program.firstProgram.InternationalDiplomaSpecialties.map((item, i) => (
                            <>
                                <li key={i}>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.program.fifthProgram.href.header}</a>
                    <h3>{context.mainData.program.scandProgram.TechnicalDiploma}</h3>
                    <ul>
                        {context.mainData.program.scandProgram.TechnicalDiplomaSpecialties.map((item, i) => (
                            <>
                                <li key={i}>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.program.scandProgram.href.header}</a>
                </div>

                <div className="right">
                    <h3>{context.mainData.program.thirdprogram.bachelors}</h3>
                    <ul>
                        {context.mainData.program.thirdprogram.bachelorsSpecialties.map((item, i) => (
                            <>
                                <li key={i}>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.program.thirdprogram.href.header}</a>

                    <h3>{context.mainData.program.fourthProgram.LocalDiploma}</h3>
                    <ul>
                        {context.mainData.program.fourthProgram.LocalDiplomaSpecialties.map((item, i) => (
                            <>
                                <li key={i}>{item}</li>
                            </>
                        ))}
                    </ul>
                    <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.program.thirdprogram.href.header}</a>
                    <h3>
                        {context.mainData.program.fifthProgram.TrainingCourses}
                    </h3>
                    <a href='https://fbrenderer-100533.campusnexus.cloud/#/renderer/6?LSCode=JLTUCAPP'>{context.mainData.program.fifthProgram.href.header}</a>
                </div>
            </section>

        </>
    );

}
export default Content;