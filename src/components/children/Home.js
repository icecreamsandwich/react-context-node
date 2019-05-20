import React, { Component} from 'react';
import ReactDOM from 'react-dom';
/* import {unstable_profiler as Profiler} from 'react'; */

/* import ErroCatcher from '../ErrorCatcher'; */
/* import PropTypes from 'prop-types'; */
/* import Portal from '../Portal'; */

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value : '',
          cool: false
        }
      }
     
      handleChange (e) {
        this.setState({ 
          value:e.target.value
        })
      }
      /* go = direction => () => this.setState(({ count }) => ({
        count: direction === "up" ? count + 1 : count - 1
      }));

      //Profiler for the component
      logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) =>{
        console.log(`id of the app:${id}`);
        console.log(`phase:${phase}`);
        console.log(`actual time:${actualTime}`);
        console.log(`base time:${baseTime}`);
        console.log(`start time:${startTime}`);
        console.log(`comit time:${commitTime}`);
      }; */

     /*  buttonClick(){
        alert("You clicked me");
        this.setState({
          cool: true
        })
      } */

      render() {
        /* if(this.state.value.length > 10) {
          throw new Error('You cannot enter more than ten characters!');
        }
        if(this.state.cool) var  cool ="cool" 
        else cool = "hot"; */

        return (
            <div> 
            <h2>Home page</h2>
            {/* <Profiler id="app" onRender={this.logProfile}>
                <button onClick={this.go("up")}>☝️</button>
                <div>The count is {this.state.count}</div>
                <button onClick={this.go("down")}>👇</button>
            </Profiler> */}
            </div>         
        ); 
      }
}

/* Home.defaultProps = {
  //name: "stranger"
}
Home.propTypes = {
  name  : PropTypes.string
} */

class App extends Component {
    render() {
        return (     
               <Home/>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

 