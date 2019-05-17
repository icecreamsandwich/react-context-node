import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Portal from '../Portal';

class Slave2 extends Component {
  state = {
    details: null
  };

  componentDidMount() {
    //call the api endpoint
    var host = "http://192.168.1.107:3002"; //||"http://localhost:3002"
    axios.post(host+"/db/fetch")
      .then((res) => {
        console.log(JSON.stringify(res.data));
        this.setState({
          details: JSON.stringify(res.data)
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    var user_details = this.state.details;
    /* var user_ar = JSON.parse(user_details); */

    return (
      <React.Fragment>
       <h2>Slave2 call</h2>
        <div className="result">
          <label>
            {user_details}
          </label>
        </div>
        <Portal>
          <h2>Portal</h2>
      </Portal>
      </React.Fragment>
    );
  }
}

export default Loader(Slave2);