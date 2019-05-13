import React, { Component } from 'react';

import Routes from '../Routes';
import Myprovider from '../Myprovider';

class Header extends Component {
    render() {
        return (
            <div>
                 <ul>
                    <li><a id="home" className="active" href="/#home">Master</a></li>
                    <li><a id="aSlave" href="/#slave1">Slave1 Call</a></li>
                    <li><a id="aSlave2" href="#slave2">Slave2 Call</a></li>
                    <li><a id="aChat" href="/#chat">Chat</a></li>
                </ul>  
              <Routes />
              <Myprovider /> 
              </div>
        );
    }
}

export default Header;