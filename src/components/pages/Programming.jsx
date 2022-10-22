import {NewsCard, CarouselHighlight} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
// import NewsContextProvider, {NewsURL} from '../../context/NewsContext';
const PageTitle = styled.h1`
    text-align: center;
    margin: 1.5rem 0;
` 

const Programming = () => {
    return (
        <Container>
            <PageTitle>Programming</PageTitle>
            <Row className='g-4'>
                <CarouselHighlight />
                <NewsCard/>
            </Row>
        </Container>
    )
}

export default Programming;