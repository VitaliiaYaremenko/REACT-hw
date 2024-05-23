import React from 'react';
import './Card.css';

const Card = ({ children }) => {
    return <div className="card mt-5">{children}</div>;
};

const CardBody = ({ children }) => {
    return <div className="card-body">{children}</div>;
};

const CardTitle = ({ children }) => {
    return <h4 className="card-title">{children}</h4>;
};

const CardText = ({ children }) => {
    return <p className="card-text">{children}</p>;
};


Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
