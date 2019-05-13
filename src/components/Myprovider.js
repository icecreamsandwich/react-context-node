import React, { Component } from 'react';
import Person2 from './Person2';

var myContext = React.createContext();

class Person extends Component {
    render() {
        return (
            <div>
                <myContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                                <p>Name : {context.state.name}</p>
                                <p>Grade : {context.state.grade}</p>
                                <p>Class : {context.state.class}</p>
                                <Person2 value={context}/>
                            </React.Fragment>
                        )
                    }
                </myContext.Consumer>
            </div>
        );
    }
} 

class Myprovider extends Component {
    state = {
        name: 'AAron',
        class: '4',
        grade: 'A',
        cool: true,
        person2_grade : 'B'
    }
    render() {
        return (
            <div>
                <myContext.Provider value={{
                    state: this.state
                }} >
                    {this.props.children}
                    <Person />
                </myContext.Provider>
            </div>
        );

    }
}

export default Myprovider;