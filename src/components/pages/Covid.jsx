import {NewsCard, CarouselHighlight} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const PageTitle = styled.h1`
    text-align: center;
    margin: 1.5rem 0;
` 

const Covid = () => {
    return (
        <Container>
            <PageTitle>Covid-19</PageTitle>
            <Row className='g-4'>
                <CarouselHighlight />
                <NewsCard/>
            </Row>
        </Container>
    )
}

export default Covid;