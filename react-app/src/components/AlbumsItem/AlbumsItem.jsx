import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import {capitalizeFirstLetter} from '../utils/utils.js'
import './Item.css';
import PropTypes from "prop-types";
const AlbumsItem = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error('Помилка при отриманні альбому:', error);
            }
        };

        fetchAlbums();
    }, []);

    if (!albums.length) {
        return <Container><p>Завантаження альбомів...</p></Container>;
    }

    return (
        <Container>
            <h1 className="my-5 text-center">Альбоми</h1>
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

AlbumsItem.propTypes = {
    albums: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    )
};

export default AlbumsItem;
