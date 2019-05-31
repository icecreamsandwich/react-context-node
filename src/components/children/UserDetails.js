import React, { Component } from 'react';
import ErrorCatcher from '../ErrorCatcher';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    var user_details = this.props.location.state;
    this.state = {
      first_name: user_details.first_name || '',
      last_name: user_details.last_name || '',
      email: user_details.email || '',
      gender: user_details.gender || '',
      ip_address: user_details.ip_address || '',
    };
  }

  handleChange = e => {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = event => {
    alert('the form has been submited');
    console.log(
      this.state.first_name +
        ',' +
        this.state.last_name +
        this.state.gender +
        this.state.email +
        this.state.ip_address
    );
    event.preventDefault();
    //DO some stuff with the data
  };

  render() {
    return (
      <React.Fragment>
        <ErrorCatcher>
          <div>
            <h2>User Details</h2>
            <form
              action=""
              method="POST"
              onSubmit={this.handleSubmit}
              className="form"
            >
              <table className="table">
                <tr>
                  <td>First Name</td>
                  <td>
                    <input
                      type="text"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      readonly="readonly"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>
                    <input
                      type="text"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <input
                      type="text"
                      name="gender"
                      value={this.state.gender}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>IP address</td>
                  <td>
                    <input
                      type="text"
                      name="ip_address"
                      value={this.state.ip_address}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <input type="submit" value="Submit" />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </ErrorCatcher>
      </React.Fragment>
    );
  }
}
