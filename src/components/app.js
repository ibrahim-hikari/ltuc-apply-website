/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './header.js';
import Content from './main.js';
import Footer from './footer.js';
import ModelProvider from './context.js';

import './app.scss';
import './responsive.scss';

export default function App() {
    return (
        <>
            <ModelProvider>
                <Header/>
                <Content/>
                <Footer/>
            </ModelProvider>
        </>
    );
}