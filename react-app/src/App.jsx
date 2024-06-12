import React from 'react';
import {Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
    return (
            <main>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<TodoList />} />
                    </Routes>
                </div>
            </main>
    );
}

export default App;


