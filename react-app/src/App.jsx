import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumDetails from './components/AlbumDetails';
import AlbumsItem from "./components/AlbumsItem";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AlbumsItem />} />
                <Route path="/album/:id" element={<AlbumDetails />} />
            </Routes>
        </Router>
    );
};

export default App;

