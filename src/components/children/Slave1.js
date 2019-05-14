import React from 'react';
import withColor from './withColor';

const ColoredComponent = props => {
    return (
      <div>
        <h1>Message:</h1>
        {props.data.msg}
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