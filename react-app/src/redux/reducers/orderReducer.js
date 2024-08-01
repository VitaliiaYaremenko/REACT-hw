const initialState = {
    orders: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] };
        case 'UPDATE_ORDER':
            return {
                ...state,
                orders: state.orders.map(order =>
                    order.id === action.payload.id ? action.payload : order
                )
            };
        case 'DELETE_ORDER':
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default orderReducer;
