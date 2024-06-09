import React from "react";
import {Container} from "react-bootstrap";
import LightningCounter from "../LightningCounter";
import '../LightningCounterDisplay/style.css'

class LightningCounterDisplay extends React.Component {

    render() {

        return(
            <Container>
                <div className='mt-5 divStyle'>
                    <LightningCounter/>
                    <h2 className='textStyles, commonStyle'>ВСПЫШКИ МОЛНИИ</h2>
                </div>
            </Container>
        )
    }
}

export default LightningCounterDisplay;
