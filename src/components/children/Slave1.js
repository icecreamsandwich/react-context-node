import React from 'react';
import withColor from './withColor';

const ColoredComponent = props => {
    return (
      <div>
      <React.Fragment>
        <h1>Movie details</h1>      
        <div className="result">
          <label>{props.data.title}</label> <br/>  
          <label>{props.data.size}</label> <br/>    
          <label>{props.data.path}</label> <br/>    
        </div>
      </React.Fragment>
      </div>
    );
  };

export default withColor(ColoredComponent);