import React from "react";
import './styleCounter.css'

class LightningCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            strikes: 0,
        }
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        this.setState({
            strikes: this.state.strikes + 100,
        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        const count = this.state.strikes.toLocaleString()
        return (
            <h1 className='counterStyle'>{count}</h1>
        )
    }
}

export default LightningCounter;
