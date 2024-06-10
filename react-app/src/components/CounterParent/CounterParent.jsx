import React from "react";
import './styleCounterParent.css';
import Counter from "../Counter";
import {Button, Container} from "react-bootstrap";

class CounterParent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
        this.increase = this.increase.bind(this);
    }


    increase  (event)  {
        this.setState({
            count: this.state.count + 1,
        })
}
    render() {
        return (
            <Container>
                <div className='backgroundStyle'>
                    <Counter display={this.state.count}/>
                    <Button onClick={this.increase}>+</Button>
                </div>
            </Container>
        )
    }
}

export default CounterParent;
