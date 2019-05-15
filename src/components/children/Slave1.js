import React from 'react';
import withColor from './withColor';

const ColoredComponent = props => {
    return (
      <div>
      <React.Fragment>
        <h1>Message:</h1>      
        <label>{props.data.msg}</label> <br/>  
        <label>{props.data.status}</label> <br/>    
        <label>{props.data.status_code}</label> <br/>    
    
      </React.Fragment>
    
        {/* <h1>Movie details</h1>
        <ul>{props.data.map(movies => 
        <React.Fragment>
            <li>{movies.title}</li> <br/>
            <li>{movies.size}</li> <br/>
            <li>{movies.path}</li> <br/>
        </React.Fragment> 
        
        )}</ul>*/}
      </div>
    );
  };

export default withColor(ColoredComponent);