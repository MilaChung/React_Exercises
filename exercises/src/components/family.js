import React from 'react';

function Family(props) {
    return (
        <div>
            <h1> Família </h1>
            {props.children}
        </div>
    );
  }
  
export default Family;