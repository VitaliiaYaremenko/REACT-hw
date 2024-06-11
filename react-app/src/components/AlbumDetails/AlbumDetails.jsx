import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { capitalizeFirstLetter } from "../utils/utils.js";

const AlbumDetails = () => {
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
                const data = await response.json();
                console.log(data);

                setPhotos(data);
            } catch (error) {
                console.error('Фото не отримано:', error);
            }
        };

        fetchPhotos();
    }, [id]);

    if (!photos.length) {
        return <Container><p>Завантаження фото...</p></Container>;
    }

    return (
        <Container>
            <h1 className="my-4">Альбом: {id}</h1>
            <Row>
                {photos.map(photo => (
                    <Col  key={photo.id}  className="g-3">
                        <Card style={{ width: '18rem' }} className='photo-card'>
                            <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} className="photo-card-img" />
                            <Card.Body className='subtitle'>
                                <Card.Title className="mb-2 text-muted">
                                    {capitalizeFirstLetter(photo.title)}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AlbumDetails;



