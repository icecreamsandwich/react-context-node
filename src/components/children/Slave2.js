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
       // console.log(Object.prototype.toString.call(user_details));
    return (
      <React.Fragment>
       <h2>Slave2 call</h2>
        <div className="result">
         {/*  <label>
            {user_details}
          </label> */}
          <table>
          <thead>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
            <th>ip_address</th>
          </tr>
          </thead>
          <tbody>
           <tr>
              {/* user_details.map(( item) =>
                <td>{user_details.first_name}</td>
                <td>{user_details.last_name}</td>
                <td>{user_details.email}</td>
                <td>{user_details.gender}</td>
                <td>{user_details.ip_address}</td>
              ) */}
           </tr>
           </tbody>
          </table>
        </div>
        <Portal>
          <h2>Portal</h2>
      </Portal>
      </React.Fragment>
    );
  }
}

export default Loader(Slave2);