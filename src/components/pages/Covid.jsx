import {NewsCovid} from '../organisms';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Covid = () => {
    return (
        <Container>
            <Row className='g-4'>
                <NewsCovid />
            </Row>
        </Container>
    )
}

export default Covid;