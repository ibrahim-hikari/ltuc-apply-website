/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import { ModelContext } from './context';

function Degree() {
    const context = useContext(ModelContext);
    let strClass = 'list-dropdown-content list';

    useEffect(() => {
        function calcVH() {
            var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            document.querySelector('.programs').setAttribute('style', 'height:' + vH + 'px;');
            console.log('vh', vH);
        }

        calcVH();
        window.addEventListener('onorientationchange', calcVH, true);
    }, []);

    return (
        <>
            <section id="programs" className="programs">
                <div className="left">
                    <h3>{context.mainData.program.scandProgram.InternationalDiploma}/{context.mainData.program.scandProgram.InternationalDiplomaSpecialties[0].collageName}</h3>

                    <ul>
                        {context.mainData.program.scandProgram.InternationalDiplomaSpecialties[0].collageList.map((item, idx) => (
                            <li key={idx} className="a-sdc a-sdc-2 program-link">
                                {item.link !== '#' ? <a target='_blank' rel="noopener noreferrer" className='analytics-button' href={item.link}>{item.name}</a> : <a href='#/' onClick={e => e.preventDefault()} className='no-click'>{item.name}</a>}
                            </li>
                        ))}
                    </ul>
                </div>

                <a target='_blank' rel="noopener noreferrer" className='program-button' href={context.mainData.aboutUsContant.aboutUsContantLink.link}>{context.mainData.aboutUsContant.aboutUsContantLink.header}</a>

            </section>
        </>
    );
}

export default Degree;