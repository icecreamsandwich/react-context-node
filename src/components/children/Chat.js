import React, { Component } from 'react';
import Myprovider from '../Myprovider';
class Chat extends Component {
    render() {
        return (
            <div>
                <h2> Chat page</h2>
                <Myprovider />
            </div>
        );
    }
}
export default Chat;