import React from 'react';
import { ChildrenWithProps } from '../utils/reactUtils'

export default props => {
    return (
        <div>
            <h1> Família </h1>
            { ChildrenWithProps(props.children, props) }
        </div>
    );
}
  
