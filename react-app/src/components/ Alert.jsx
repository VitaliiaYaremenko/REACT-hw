import React from "react";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className={"alert alert-" + type} role="alert">{text}</div>
                </div>
            </div>
        )
    }
}

export default Alert;
