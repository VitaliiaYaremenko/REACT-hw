import React from "react";

class ListGroup extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="container">
                <div className="row mt-5">
                    <ul className="list-group">
                        {children.map((child, i) => <li className="list-group-item" key={i}>{child}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListGroup;
