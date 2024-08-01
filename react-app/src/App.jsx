import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import {Provider} from "react-redux";
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/order/:id" element={<OrderPage />} />
            </Routes>
        </Router>
        </Provider>
    );
}

export default App;

