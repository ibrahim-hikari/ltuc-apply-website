import React from 'react';

import Header from './header.js';
// import Main from './main.js';
// import Footer from './footer.js';

import './app.scss';
import './responsive.scss';
import ModelProvider from './context.js';

export default function App() {
    return (
        <>
            <ModelProvider>
                <Header />
            </ModelProvider>
        </>
    );
}