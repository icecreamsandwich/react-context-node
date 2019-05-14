import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

//Import components
import Home from './children/Home';
import Slave1 from './children/Slave1';
import Slave2 from './children/Slave2';
import Chat from './children/Chat';
class Routes extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path="/home" component={Home} />
                    <Route path="/slave1" component={Slave1} />
                    <Route path="/slave2" component={Slave2} />
                    <Route path="/chat" component={Chat} />
                </HashRouter>
            </div>
        );
    }
}

export default Routes;