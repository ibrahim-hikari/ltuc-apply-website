/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { ModelContext } from './context';
import Degree from './degree.js';


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
                <a target='_blank' rel="noopener noreferrer" className='program-button' href={context.mainData.aboutUs.aboutUsLink.link}>{context.mainData.aboutUs.aboutUsLink.header}</a>
            </section>
            <section id="aboutUs-part-2" className="aboutUs-part-2">
                {context.mainData.aboutUsContant.aboutUsContantSections.map((element, i) => (
                    <React.Fragment key={i}>
                        <h3 >{element.Features ? element.Features : ' '}</h3>
                        <h4>{element.description}</h4>
                    </React.Fragment>
                ))}
                <a target='_blank' rel="noopener noreferrer" className='program-button' href={context.mainData.aboutUsContant.aboutUsContantLink.link}>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>
            </section>
            <Degree />
        </>
    );

}
export default Content;