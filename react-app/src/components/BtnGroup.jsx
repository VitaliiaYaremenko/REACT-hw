import React from "react";
import classNames from 'classnames';

class BtnGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            primary: false
        };
    }

    changeState = () => {
        this.setState(({ primary }) => ({ primary: !primary}));
    };

    getButtonClass(primary) {
        return classNames('btn mt-3', {
            'btn-primary': primary,
            'btn-secondary': !primary
        });
    }

        render() {
            const { primary } = this.state;
            const buttonClassLeft = this.getButtonClass(this.state.primary);
            const buttonClassRight = this.getButtonClass(!this.state.primary);

        return (
            <div className="container">
                <div className="row">
                    <div className="btn-group" role="group">
                        <button type="button" className={buttonClassLeft} onClick={this.changeState}>Left</button>
                        <button type="button" className={buttonClassRight} onClick={this.changeState}>Right</button>
                    </div>
                </div>
            </div>
        )}
}

export default BtnGroup;
