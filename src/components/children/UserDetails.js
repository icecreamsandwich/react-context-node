import React, { Component } from 'react'

export default class UserDetails extends Component {
    componentDidMount() {
    
    }
    
  render() {
      if(this.props.location.state.user_id){
        var user_details = this.props.location.state.user_id;
      }
    
    return (
      <div>
      <h5>User Details</h5>
        {user_details}
      </div>
    )
  }
}
