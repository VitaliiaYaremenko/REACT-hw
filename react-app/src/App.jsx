import React, { Component } from 'react';
import Card from './components/Card.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Card title="Hi" />
                <Card text="how are you?" />
                <Card title="Hi" text="how are you?" />
            </div>
        );
    }
}


export default App
