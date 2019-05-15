import React, { Component } from 'react';
import axios from 'axios';

class Slave3 extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        axios.post("http://localhost:3002/db/aggregate")
            .then((res) => {
                this.setState({
                    data: JSON.stringify(res.data)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <label>
                    {this.state.data}
                </label>
            </div>
        );
    }
}

export default Slave3;