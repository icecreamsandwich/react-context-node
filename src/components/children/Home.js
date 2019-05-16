import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import ErroCatcher from '../ErrorCatcher';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''}
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange(e) {
        this.setState({ value: e.target.value})
      }
      
      render() {
        if(this.state.value.length > 5) {
          throw new Error('You cannot enter more than five characters!');
        }
        return (
          <div>
              <h2>Home page</h2>
            {/* <label>Type away: </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          </div>
        );
      }
}

class App extends Component {
    render() {
        return (
           <ErroCatcher>
               <Home/>
           </ErroCatcher>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));