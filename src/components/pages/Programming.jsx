import {NewsProgramming} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Programming = () => {
    return (
        <Container>
            <Row className='g-4'>
                <NewsProgramming />
            </Row>
        </Container>
    )
}

export default Programming;