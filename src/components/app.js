/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './header.js';
import Content from './main.js';
import Footer from './footer.js';

import './app.scss';
import './responsive.scss';
import ModelProvider from './context.js';

export default function App() {
    return (
        <>
            <ModelProvider>
                <Header />
                <Content />
                <Footer />
            </ModelProvider>
        </>
    );
}