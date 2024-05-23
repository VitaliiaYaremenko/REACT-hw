import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    render() {
        const { isOpen, children } = this.props;

        return (
            <div className={`modal ${isOpen ? 'fade show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;



