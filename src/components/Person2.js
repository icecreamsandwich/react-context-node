import React, { Component } from 'react';

class Person2 extends Component {
    render() {
    var context_ar  = this.props.value;
        return (
            <div>
                <p> Person2 Grade : {context_ar.state.person2_grade}</p>
            </div>
        );
    }
}

export default Person2;