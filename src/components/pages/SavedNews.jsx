import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {NewsCard} from '../organisms';
import NewsContextProvider from '../../context/NewsContext';
import styled from 'styled-components';

const PageTitle = styled.h2`
    margin: 1.5rem 0;
` 

const SavedNews = () => {

    return (
        <Container>
        <PageTitle>Berita Tersimpan</PageTitle>
            <Row className='g-4'>
                <NewsContextProvider>
                    <NewsCard/>
                </NewsContextProvider>
            </Row>
        </Container>
    )
}

export default SavedNews