import { Search } from '../molecules';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'
import styled from 'styled-components'

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
                        <Nav.Link>Indonesia</Nav.Link>
                        <Nav.Link href="/programming">Programming</Nav.Link>
                        <Nav.Link href="/covid">COVID-19</Nav.Link>
                        <Nav.Link>Saved</Nav.Link>
                    </ResponsiveNav>
                    <Search />
                </MobileCollapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp