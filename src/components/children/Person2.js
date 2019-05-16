import React, { Component } from 'react';

class Person2 extends Component {
    render() {
    var context_ar  = this.props.value;
    if(context_ar.state.cool) var cool = "cool";
    else cool = "hot";
        return (
            <div>
                <React.Fragment>
                <p>Name : {context_ar.state.name}</p>
                <p>Grade : {context_ar.state.grade}</p>
                <p>Class : {context_ar.state.class}</p>
                <p>Counter : {context_ar.state.counter}</p>
                <p> Person2 Grade : {context_ar.state.person2_grade}</p>
                and {context_ar.state.name} is <strong> {cool}</strong> <br/>
                </React.Fragment>
                
                <button onClick={context_ar.makeitHot}>Make it {cool}</button> <br/> <br/>   
                <button onClick={context_ar.IncrementCounter}>Increment Counter</button>
                {/* <button onClick={context_ar.ChangePersonGrade}>Change Person Grade</button> */}
            </div> 
        );
    }
}

export default Person2;