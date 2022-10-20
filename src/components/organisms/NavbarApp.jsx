import { Search } from '../molecules';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'
import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom';

const ResponsiveNav = styled(Nav)`
    display: flex;
    @media only screen and (min-width: 400px) and (max-width: 700px) {
        flex-direction: row;
        gap: 12px;
        margin-bottom: 12px
    }
`

const MobileCollapse = styled(Navbar.Collapse)`
    @media only screen and (min-width: 400px) and (max-width: 700px) {
        flex-direction: column !important;
    }
`

const NavbarApp = () => {
    return (
        <Navbar className="shadow-sm rounded" bg="light" expand="lg">
            <Container fluid>
                <MobileCollapse className='d-flex justify-content-around'>
                    <ResponsiveNav>
                        <Nav.Link as={NavLink} to='/' end className={({isActive}) => (isActive ? 'fw-bold text-decoration-underline' : 'fw-normal')}>Indonesia</Nav.Link>
                        <Nav.Link as={NavLink} to="/programming" className={({isActive}) => (isActive ? 'fw-bold text-decoration-underline' : 'fw-normal')}>Programming</Nav.Link>
                        <Nav.Link as={NavLink} to="/covid" className={({isActive}) => (isActive ? 'fw-bold text-decoration-underline' : 'fw-normal')}>COVID-19</Nav.Link>
                        <Nav.Link as={NavLink} to="/saved" className={({isActive}) => (isActive ? 'fw-bold text-decoration-underline' : 'fw-normal')}>Saved</Nav.Link>
                    </ResponsiveNav>
                    <Search />
                </MobileCollapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp