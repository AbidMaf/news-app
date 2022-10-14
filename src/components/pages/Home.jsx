import {NewsCard} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row className='g-4'>
                <NewsCard />
            </Row>
        </Container>
    )
}

export default Home;