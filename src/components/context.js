import React, { useState } from 'react';
import data from '../data/Arabic.json';
export const ModelContext = React.createContext();

function ModelProvider(props) {

    const [headerData, setHeaderData] = useState(data.header);
    const [mainData, setMainData] = useState(data.main);
    const [footerData, setFooterData] = useState(data.footer);
    const [lang, setLang] = useState('English');

    const state = {
        headerData,
        mainData,
        footerData,
        lang,
        changeHeaderData: setHeaderData,
        changeMainData: setMainData,
        changeFooterData: setFooterData,
        changeLang: setLang,
    };

    return (
        <ModelContext.Provider value={state}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;