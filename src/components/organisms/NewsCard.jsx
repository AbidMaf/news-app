import {
    Card
} from 'react-bootstrap';

import React, {useState, useEffect} from 'react';

const NewsCard = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    var url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6c8c55f07ec642d7b968deb80f117e24';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data.articles))
    }, [])

    console.log('data ', data)

    return (
        <>
            
            {data.map((item, index) => {
                <Card className="shadow-sm rounded mb-3">
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Content
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <h1>{item.title}</h1>  */}
            })}
        </>
    )
}

export default NewsCard