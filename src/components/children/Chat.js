import React, { Component } from 'react';
import Myprovider from '../Myprovider';
class Chat extends Component {
    render() {
        return (
            <div>
                <h2> This is a chat page</h2>
                <Myprovider />
            </div>
        );
    }
}
export default Chat;