import React from 'react';
import axios from 'axios';

const withColor = (BaseComponent) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      /* fetch("https://api-mock.free.beeceptor.com/status",{ 
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
        }); */
        //call the api endpoint
      axios.post("http://localhost:3002/api")
      .then((res) =>{
        //  console.log(JSON.stringify(res.data));
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