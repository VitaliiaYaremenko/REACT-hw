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
                console.log(data); // Проверка данных
                setPhotos(data);
            } catch (error) {
                console.error('Ошибка при получении фотографий:', error);
            }
        };

        fetchPhotos();
    }, [id]);

    if (!photos.length) {
        return <Container><p>Загрузка фотографий...</p></Container>;
    }

    return (
        <Container>
            <h1 className="my-4">Фотографии из альбома: {id}</h1>
            <Row>
                {photos.map(photo => (
                    <Col  key={photo.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="photo-card">
                            <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} className="photo-card-img" />
                            <Card.Body className='text'>
                                <Card.Title>
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



