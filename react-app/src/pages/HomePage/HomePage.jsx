import React from 'react';
import OrderList from '../../components/OrderList';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomePage = () => {
    return (
        <div>
            <Button component={Link} to="/order/new">Create New Order</Button>
            <OrderList />
        </div>
    );
};

export default HomePage;






