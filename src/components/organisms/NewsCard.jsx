import {
    Card,
    Col,
    Button,
    Spinner
} from 'react-bootstrap';
import styled from 'styled-components';
import React, {useState, useEffect, useContext} from 'react';
import { NewsContext } from '../../NewsContext';

const RedirectNews = styled(Card.Link)`
    text-decoration: none;
    color: #212529;
`

const NewsCard = () => {
    var [loading, setLoading] = useState(true);
    var {data, loading} = useContext(NewsContext);
    console.log('loading ', loading)

    return (
        <>
            {!loading ? (
                data.map((item) => (
                <Col sm={4} xs={1}>
                    <Card className="shadow-sm rounded mb-3">
                        <Card.Img variant="top" onError={({e}) => {
                            e.onerror = null
                            e.src="https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80"
                        }} src={!item.urlToImage ? 'https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80' : item.urlToImage} />
                        <Card.Body>
                            <a href={item.url} target='_blank' style={{ textDecoration: 'none', color: '#212529' }}>
                                <Card.Title>{item.title}</Card.Title>
                            </a>
                            <Card.Text>
                                {item.content ? (item.content.substring(0, 196) + '...') : ' '} <a href={item.url} target='_blank'>more</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            ) : (
                <Col sm={12} xs={12} className='align-self-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            )}
        </>
    )
}

export default NewsCard