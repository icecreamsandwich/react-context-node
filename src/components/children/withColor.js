import React from 'react';
import axios from 'axios';

const withColor = (BaseComponent) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
        //call the api endpoint
      var host = "http://192.168.1.107:3002"; //||"http://localhost:3002"
      axios.post(host+"/api")
      .then((res) =>{
          this.setState({
            data :JSON.stringify(res.data)
        })
      })
      .catch(err => console.log(err));   
    }

    render() {
      var details = this.state.data;
      var details_ar = JSON.parse(details);
     
      if (!this.state.data) {
        return <div>Loading ...</div>;
      }

      return <BaseComponent data={details_ar} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default withColor;