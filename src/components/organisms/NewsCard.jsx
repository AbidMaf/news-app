import {
    Card,
    Col,
    Button
} from 'react-bootstrap';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

const RedirectNews = styled(Card.Link)`
    text-decoration: none;
    color: #212529;
`

const NewsCard = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    var url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6c8c55f07ec642d7b968deb80f117e24';

    const fetchNews = () => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json.articles);
            setLoading(false);
        })
    } 

    useEffect(() => {
        fetchNews()
    }, [])

    console.log('data ', data)

    return (
        <>
            {data.map((item) => (
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
            ))}
        </>
    )
}

export default NewsCard