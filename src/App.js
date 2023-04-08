import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
