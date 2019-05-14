import React from 'react';
//import axios from 'axios';

const withColor = (BaseComponent) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
        /* axios.post("http://192.168.1.107:5001/api")
        .then(res => {
            this.setState({
                data : res
            })
        }) */
       /*  axios({
            method: 'post',
            url : "http://192.168.1.107:5001/api",
            headers: {'Content-type': 'application/json'}
        })
        .then(res => {
            this.setState({
                data : res
            })
        }) */
      
      fetch("http://demo8447875.mockable.io/",{ 
            method : "POST",
             headers : {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            } 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
          this.setState({ data });
        });
    }

    render() {
      if (!this.state.data) {
        return <div>Loading ...</div>;
      }

      return <BaseComponent data={this.state.data} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default withColor;