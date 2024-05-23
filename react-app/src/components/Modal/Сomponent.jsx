import React from 'react';
import Modal from './Modal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Component extends React.Component {
    state = { modal: false };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger mt-5" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Header toggle={this.toggle}>Modal title</Header>
                    <Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Body>
                    <Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
                    </Footer>
                </Modal>
            </div>
        );
    }
}

