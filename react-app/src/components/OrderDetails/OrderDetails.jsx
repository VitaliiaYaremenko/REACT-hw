import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const OrderDetails = () => {
    const { id } = useParams();
    const order = useSelector((state) => state.orders.orders.find(order => order.id === id));

    if (!order) return <div>Order not found</div>;

    return (
        <List>
            {order.products.map((product, index) => (
                <ListItem key={index}>
                    <ListItemText primary={`${product.name}: ${product.quantity}`} />
                </ListItem>
            ))}
        </List>
    );
};

export default OrderDetails;
