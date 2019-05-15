import React, { Component } from 'react';
import axios from 'axios';
import withColor from './withColor';

class Slave2 extends Component {
  state = {
    details: null
  };

  componentDidMount() {
    /* fetch("http://192.168.1.107:3002/api",{
      method : "POST",
      headers : {
        'Content-type' : 'application/json',
      }
      })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
       data : data
      })
    })
    .catch(err => console.log(err)) */
    //call the api endpoint
    axios.post("http://localhost:3002/db/fetch")
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
    var user_ar = JSON.parse(user_details);

    return (
      <div>
        <h2>This is slave2 call</h2>
        <label>
          {user_details}
        </label>
      </div>
    );
  }
}

export default withColor(Slave2);