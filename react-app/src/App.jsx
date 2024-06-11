import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoItemPage from './pages/TodoItemPage.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/todo-items/:id" element={<TodoItemPage />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;

