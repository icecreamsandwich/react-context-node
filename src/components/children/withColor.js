import React from 'react';
/* import axios from 'axios'; */
const withColor = (BaseComponent) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      fetch("https://api-mock.free.beeceptor.com/status",{ 
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