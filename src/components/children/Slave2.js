import React, { Component } from 'react';
class Slave2 extends Component {
    /* {
        method : "POST",
        headers : {
          'Content-type' : 'application/json',
        }
    } */
    componentDidMount() {
      fetch("http://localhost:5001/db/fetch")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
            data : data.data,
            status : data.status
        })
      })
    }
    
    render() {
        return (
            <div>
                <h2>This is slave2 call</h2>
                {/* {this.state.data} */}
            </div>           
        );
    }
}

export default Slave2;