import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOrder } from '../../redux/actions/orderActions.js';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const OrderList = () => {
    const orders = useSelector((state) => state.orders.orders);
    const dispatch = useDispatch();

    return (
        <List>
            {orders.map((order) => (
                <ListItem key={order.id}>
                    <ListItemText primary={`Order ID: ${order.id}`} />
                    <Button component={Link} to={`/order/${order.id}`}>View</Button>
                    <Button onClick={() => dispatch(deleteOrder(order.id))}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

OrderList.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired
    }))
};

export default OrderList;
