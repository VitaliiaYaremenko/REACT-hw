export const addOrder = (order) => ({
    type: 'ADD_ORDER',
    payload: order
});

export const updateOrder = (order) => ({
    type: 'UPDATE_ORDER',
    payload: order
});

export const deleteOrder = (id) => ({
    type: 'DELETE_ORDER',
    payload: { id }
});
