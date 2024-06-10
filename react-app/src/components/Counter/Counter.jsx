import React from "react";
import './styleCounter.css';

class Counter extends React.Component{
    render() {
        return (
            <div className='textStyle'>
                {this.props.display}
            </div>
        )
    }
}

export default Counter;
