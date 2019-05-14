import React, { Component } from 'react';
//import Person2 from './children/Person2';
import myContext from './Context';
import MyConsumer from './MyConsumer';

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
                    <MyConsumer />
                </myContext.Provider>
            </div>
        );

    }
}

export default Myprovider;