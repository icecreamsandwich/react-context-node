import React, { Component } from 'react';

class Person2 extends Component {
    render() {
    var context_ar  = this.props.value;
    if(context_ar.state.cool) var cool = "cool";
    else cool = "hot";
        return (
            <div>
                <p> Person2 Grade : {context_ar.state.person2_grade}</p>
                and {context_ar.state.name} is <strong> {cool}</strong> 
            </div> 
        );
    }
}

export default Person2;