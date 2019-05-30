import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';
/* import Portal from '../Portal'; */
import {Link} from 'react-router-dom';

class Slave2 extends Component {
  state = {
    details: null
  };

  componentDidMount() {
    //call the api endpoint
    var host = "http://192.168.1.107:3002";//"http://localhost:3002";
    axios.post(host + "/db/fetch")
      .then((res) => {
        var user_ar = JSON.parse(JSON.stringify(res.data));
        this.setState({
          details: user_ar
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    var user_details = this.state.details;
   /*  console.log(user_details);
    console.log(Object.prototype.toString.call(user_details)); */
    //iterate in render method
    /*  if (user_details) {
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
     // Iterate in JSX 
       {items} */
    return (
      <React.Fragment>
        <h2>Slave2 call</h2>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>gender</th>
              <th>ip_address</th>
            </tr>
          </thead>
            <tbody>
            <React.Fragment>             
              {user_details ? user_details.map((items) => {
                return(<tr key={items.id}>
                  <td>
                  <Link to={{
                    pathname:'/userdetails',
                    state :{
                      user_id : items._id,
                      first_name : items.first_name,
                      last_name : items.first_name,
                      email : items.email,
                      gender : items.gender,
                      ip_address : items.ip_address,
                    }
                  }}>{items._id} </Link>
                  </td>
                  <td>{items.first_name}</td>
                  <td>{items.last_name}</td>
                  <td>{items.email}</td>
                  <td>{items.gender}</td>
                  <td>{items.ip_address}</td>
                </tr>)   
              }) : ""}
            </React.Fragment>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Loader(Slave2);