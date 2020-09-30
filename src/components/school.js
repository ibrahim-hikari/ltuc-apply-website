// import React, { useContext, useEffect, useState } from 'react';
// import $ from 'jquery';
// import { ModelContext } from './context';

// function School() {
//     const context = useContext(ModelContext);

//     return (
//         <>
//             <button onClick={() => context.changeToggle(true)} className='program-button filter-button' >By School</button>
//             <button onClick={() => context.changeToggle(false)} className='program-button filter-button' >By Degree</button>
//             <section id="school" className="programs">
//                 <div className="left">
//                     <h3>{context.mainData.school.advancedTechnology.name}</h3>
//                     <ul>
//                         {
//                             context.mainData.school.advancedTechnology.advancedTechnologySpecialties.map((item, i) => (
//                                 <>
//                                     <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                                 </>
//                             ))}
//                     </ul>


//                     <h3>{context.mainData.school.appliedArt.name}</h3>
//                     <ul>{context.mainData.school.appliedArt.appliedArtSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>

//                     <h3>{context.mainData.school.schoolOfAutimativeTechnology.name}</h3>
//                     <ul>{context.mainData.school.schoolOfAutimativeTechnology.schoolOfAutimativeTechnologySpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>


//                     <h3>{context.mainData.school.schoolOFBeautyArtsAndScinces.name}</h3>
//                     <ul>{context.mainData.school.schoolOFBeautyArtsAndScinces.schoolOFBeautyArtsAndScincesSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>

//                     <h3>{context.mainData.school.schoolOfBusiness.name}</h3>
//                     <ul>{context.mainData.school.schoolOfBusiness.schoolOfBusinessSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>
//                     <h3>{context.mainData.school.schoolOfCostructionAndCivilEngineering.name}</h3>
//                     <ul>{context.mainData.school.schoolOfCostructionAndCivilEngineering.schoolOfCostructionAndCivilEngineeringSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>

//                     <h3>{context.mainData.school.schoolOfCostructionAndCivilEngineering.name}</h3>
//                     <ul>{context.mainData.school.schoolOfCostructionAndCivilEngineering.schoolOfCostructionAndCivilEngineeringSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>
//                 </div>

//                 <div className="right">
//                     <h3>{context.mainData.school.appliedMedicalSciences.name}</h3>
//                     <ul>{context.mainData.school.appliedMedicalSciences.appliedMedicalSciencesSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>
//                     <h3>{context.mainData.school.schoolOfCreativeMedia.name}</h3>
//                     <ul>{context.mainData.school.schoolOfCreativeMedia.schoolOfCreativeMediaSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>


//                     <h3>{context.mainData.school.schoolOfHospitalityAndTourim.name}</h3>
//                     <ul>{context.mainData.school.schoolOfHospitalityAndTourim.schoolOfHospitalityAndTourimSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>

//                     <h3>{context.mainData.school.schoolOfMechanicalAndElectricalEngineering.name}</h3>
//                     <ul>{context.mainData.school.schoolOfMechanicalAndElectricalEngineering.schoolOfMechanicalAndElectricalEngineeringSpecialties.map((item, i) => (
//                         <>
//                             <li key={i}><a className="program-link" href={item.link}>{item.name}</a></li>
//                         </>
//                     ))}
//                     </ul>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default School;