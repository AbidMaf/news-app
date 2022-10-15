import {
    Card,
    Col,
    Button
} from 'react-bootstrap';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useNewsContext } from '../../NewsContext';

const RedirectNews = styled(Card.Link)`
    text-decoration: none;
    color: #212529;
`

const NewsCard = ({isLoading}) => {
    const [data, setData] = useState([]);
    setData(useNewsContext());
    console.log('data ', data)

    return (
        <>
            {!isLoading ? data.map((item) => (
                <Col sm={4} xs={1}>
                    <Card className="shadow-sm rounded mb-3">
                        <Card.Img variant="top" src={item.urlToImage} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.content.substring(0, 196) + '...'} <a href={item.url} target='_blank'>more</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )) : <h1>Loading...</h1>}
        </>
    )
}

export default NewsCard