import React, { Component } from 'react';

class Footer extends Component {
    render() {
        var copyrightStr = "© COPYRIGHT PISERVE TECHNOLOGIES PVT. LTD 2019. ALL RIGHTS RESERVED.";
        var copyright = copyrightStr.toLowerCase();
        return (
            <div className="footer">
                <h5>Muneeb Mukhtar</h5>
                <label style={{float:'left'}}>{copyright}</label>
                <label style={{float:'right'}}>Powered by Piserve @2019</label>
            </div>
        );
    }
}

export default Footer;