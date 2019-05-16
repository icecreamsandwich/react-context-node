import React, { Component } from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Routes from '../Routes';

class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                <LeftNav />
                <RightNav />
                <Footer />

                <Routes />
            </div>
        );
    }
}


export default Container;