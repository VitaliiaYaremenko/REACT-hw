import React from "react";

class Card extends React.Component {
    render() {
        const {title, text} = this.props;
        return (
            <div className="card">
                {(title || text) && (
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                )}
            </div>
        )
    }
}


export default Card;
