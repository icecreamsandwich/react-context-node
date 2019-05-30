import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="Header">
                 <ul>
                    <li><a id="home" className="active" href="/#home">Master</a></li>
                    <li><a id="aSlave" href="/#slave1">Slave1 Call</a></li>
                    <li><a id="aSlave2" href="#slave2">Slave2 Call</a></li>
                    <li><a id="aChat" href="/#chat">Blah</a></li>
                    <li><a id="aChat" href="/#dyno">Dyno</a></li>
                    <li><a id="aHooks" href="/#hooks">Hooks</a></li>
                    <li><a id="aDyno" href="/#dyno">Dyno</a></li>
                    <li><a id="aChart" href="/#chart">Chart</a></li>
                    <li><a id="aChart" href="/#highchart">HighChart</a></li>
                </ul>  
              </div>
        );
    }
}

export default Header;