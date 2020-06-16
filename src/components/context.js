import React, { useState } from 'react';
export const ModelContext = React.createContext();

function ModelProvider(props) {

    const [headerData, setHeaderData] = useState({});
    const [mainData, setMainData] = useState({});
    const [footerData, setFooterData] = useState({});


    const state = {
        headerData,
        mainData,
        footerData,
        changeHeaderData: setHeaderData,
        changeMainData: setMainData,
        changeFooterData: setFooterData,
    };

    return (
        <ModelContext.Provider value={state}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;