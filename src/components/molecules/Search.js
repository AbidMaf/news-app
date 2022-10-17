import { useEffect, useState } from 'react';
// import { useDebounce } from 'use-debounce';
import {
    Button,
    Form,
    Col,
    Card
} from 'react-bootstrap';
import {useNavigate, createSearchParams} from 'react-router-dom';

const baseUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6c8c55f07ec642d7b968deb80f117e24';

function Search () {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    // const [query] = useDebounce(text, 1000);
    const [news, setNews] = useState([]);

    // useEffect(() => {
    // async function searchNews() {
    //     try{
    //         setLoading(true);
    //         const response = await window.fetch(`${baseUrl}?q=${query}`);
    //         const data = await response.json();
    //         setNews(data.articles)
    //         setLoading(false);
    //     }catch(e){
    //         setLoading(false);
    //         console.log(e)
    //     }
    // }
    // searchNews()
    // }, [query])

    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        navigate({
            pathname: 'search',
            search: createSearchParams({
                query: text
            }).toString()
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex flex-row flex-nowrap" controlId="formSearch">
                <Form.Control 
                    className="mr-2" 
                    name="search"
                    type="text" 
                    placeholder="Cari berita" 
                    size="sm" 
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                />
                <Button variant="primary" type="submit" size="sm">Cari</Button>
            </Form.Group>
        

        <div>
            {news && news.map(news => (
                <div>
                    <h1>{news.articles}</h1>
                </div>
            ))}
        </div>
        </Form>
    )
}

export default Search