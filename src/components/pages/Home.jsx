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
            <Row>
                <Col sm={4} xs={1}>
                    <NewsCard />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;