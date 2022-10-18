import {NewsCard, CarouselHighlight} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NewsContextProvider, {NewsURL} from '../../context/NewsContext';
import {useEffect, useState, useContext} from 'react';

const PageTitle = styled.h1`
    text-align: center;
    margin: 1.5rem 0;
` 

const Home = () => {

    return (
        <Container>
            <PageTitle>Seputar Indonesia</PageTitle>
            <Row className='g-4'>
                <NewsContextProvider>
                    <CarouselHighlight />
                    <NewsCard/>
                </NewsContextProvider>
            </Row>
        </Container>
    )
}

export default Home;