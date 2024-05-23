import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
    <div className="modal-footer">{children}</div>
);

Footer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Footer;

