import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {NewsCard} from '../organisms';
import NewsContextProvider from '../../NewsContext';
import { useSearchParams } from "react-router-dom";
import styled from 'styled-components';

const PageTitle = styled.h2`
    text-align: left ;
    margin: 1.5rem 0;
` 

const SearchPage = () => {
    const [searchParams] = useSearchParams();

    return (
        <Container>
        <PageTitle>Menampilkan hasil pencarian dari <b>"{ searchParams.get('query') }"</b></PageTitle>
            <Row className='g-4'>
                <NewsContextProvider>
                    <NewsCard/>
                </NewsContextProvider>
            </Row>
        </Container>
    )
}

export default SearchPage