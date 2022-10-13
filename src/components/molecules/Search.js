import {
    Button,
    Form,
} from 'react-bootstrap';

const Search = () => {
    return (
        <Form>
            <Form.Group className="d-flex flex-row flex-nowrap" controlId="formSearch">
                <Form.Control className="mr-2" type="text" placeholder="Cari berita" size="sm" />
                <Button variant="primary" type="submit" size="sm">Cari</Button>
            </Form.Group>
        </Form>
    )
}

export default Search