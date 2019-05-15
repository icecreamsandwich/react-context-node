import React from 'react';
import withColor from './withColor';

const ColoredComponent = props => {
    return (
      <div>
     {/*  <React.Fragment>
        <h1>Message:</h1>      
        <label>{props.data.msg}</label> <br/>  
        <label>{props.data.status}</label> <br/>    
        <label>{props.data.status_code}</label> <br/>    
    
      </React.Fragment> */}

      <React.Fragment>
        <h1>Movie details</h1>      
        <label>{props.data.title}</label> <br/>  
        <label>{props.data.size}</label> <br/>    
        <label>{props.data.path}</label> <br/>    
    
      </React.Fragment>
      </div>
    );
  };

export default withColor(ColoredComponent);