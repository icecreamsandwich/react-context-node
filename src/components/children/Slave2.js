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
    var host = "http://localhost:3002";
    axios.post(host + "/db/fetch")
      .then((res) => {
        // console.log(JSON.sthingify(res.data));
        var user_ar = JSON.parse(JSON.stringify(res.data));
        // console.log(user_ar);
        this.setState({
          details: user_ar
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    var user_details = this.state.details;
    console.log(user_details);
    console.log(Object.prototype.toString.call(user_details));
    if (user_details) {
      var items = user_details.map((item, key) => {
        return <React.Fragment>
          <tr>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          </tr>
        </React.Fragment>
      });
    }
    else items = "";
    return (
      <React.Fragment>
        <h2>Slave2 call</h2>
      
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>        
              {items}          
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Loader(Slave2);