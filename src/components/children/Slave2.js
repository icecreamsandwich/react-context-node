import React, { Component } from 'react';
import axios from 'axios';

class Slave2 extends Component {
    state = {
        details : null
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
      axios.post("http://192.168.1.107:3002/api")
      .then((res) =>{
        //  console.log(JSON.stringify(res.data));
          this.setState({
            details :JSON.stringify(res.data)
        })
      })
      .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h2>This is slave2 call</h2>
                <label>
                    {this.state.details}
                </label>
            </div>           
        );
    }
}

export default Slave2;