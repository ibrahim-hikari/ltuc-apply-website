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
            <Degree />
        </>
    );

}
export default Content;