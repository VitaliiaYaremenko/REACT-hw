import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
    return (
        <Router>
            <main>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<TodoList />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
}

export default App;


