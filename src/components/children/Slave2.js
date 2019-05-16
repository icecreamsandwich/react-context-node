import React, { Component } from 'react';
import axios from 'axios';
import withColor from './withColor';

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
       <h2>This is slave2 call</h2>
        <div className="result">
          <label>
            {user_details}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default withColor(Slave2);