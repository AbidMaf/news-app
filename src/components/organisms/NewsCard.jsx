import {
    Card,
    Col,
    Button,
    Spinner,
    Row
} from 'react-bootstrap';
import styled from 'styled-components';
import React, {useState, useEffect, useContext} from 'react';
import { NewsContext } from '../../NewsContext';
import { FiBookmark } from 'react-icons/fi';

const ThumbnailOverlay = styled.div`
    background-image: radial-gradient(
        circle 128px at calc(100% + 20px) calc(-16% + 10px),
        rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)
    ) !important;
    border-radius: 0 0 0 100vw !important;
    /* background-color: black; */
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
                        <ThumbnailOverlay className='position-absolute top-0 end-0 w-25 h-25 z-0'></ThumbnailOverlay>
                        <Button className='position-absolute top-0 end-0 me-1 mt-1 z-1' variant='outline-light'>
                            <FiBookmark />
                        </Button>
                        <Card.Img variant="top" onError={({e}) => {
                            e.onerror = null
                            e.src="https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80"
                        }} src={!item.urlToImage ? 'https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80' : item.urlToImage} />
                        <Card.Body>
                            <a href={item.url} target='_blank' style={{ textDecoration: 'none', color: '#212529' }}>
                                <Card.Title style={{ textAlign: 'justify', wordSpacing: '-2px'}}>{item.title}</Card.Title>
                            </a>
                            <Card.Text style={{ textAlign: 'justify', wordSpacing: '-2px'}}>
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