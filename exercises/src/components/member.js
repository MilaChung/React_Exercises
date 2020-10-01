import React from 'react';

function Member(props) {
    return (
        <div>
         {props.name} {props.lastName}
        </div>
    );
  }
  
  export default Member;