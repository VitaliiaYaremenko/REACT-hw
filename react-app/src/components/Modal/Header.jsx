import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ toggle, children }) => (
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button type="button" className="btn-close" aria-label="Close" onClick={toggle}></button>
    </div>
);

Header.propTypes = {
    toggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Header;

