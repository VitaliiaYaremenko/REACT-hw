import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import {capitalizeFirstLetter} from '../utils/utils.js'
import './Item.css';
const AlbumsItem = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error('Ошибка при получении альбомов:', error);
            }
        };

        fetchAlbums();
    }, []);

    if (!albums.length) {
        return <Container><p>Загрузка альбомов...</p></Container>;
    }

    return (
        <Container>
            <h1 className="my-5 text-center">Альбомы</h1>
            <ListGroup className='mb-5' variant="flush">
                {albums.map(album => (
                    <ListGroup.Item key={album.id} className='text-style'>
                        <Link to={`/album/${album.id}`} className="text-decoration-none">
                            {capitalizeFirstLetter(album.title)}
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default AlbumsItem;
