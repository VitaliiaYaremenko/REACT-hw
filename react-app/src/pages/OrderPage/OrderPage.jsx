import React from 'react';
import OrderForm from '../../components/OrderForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addOrder, updateOrder } from '../../redux/actions/orderActions';

const OrderPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const existingOrder = useSelector((state) =>
        state.orders.orders.find(order => order.id === id)
    );

    const handleSubmit = (order) => {
        if (id === 'new') {
            dispatch(addOrder({ ...order, id: Date.now().toString() }));
        } else {
            dispatch(updateOrder(order));
        }
        navigate.push('/');
    };

    const initialValues = existingOrder || { products: [{ name: '', quantity: 1 }] };

    return <OrderForm initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default OrderPage;
