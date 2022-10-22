import {
    Card,
    Col,
    Button,
    Spinner,
    Row
} from 'react-bootstrap';
import styled from 'styled-components';
import React, {useState, useEffect, useContext, memo} from 'react';
import useNews from '../../context/NewsContext';
import { FiBookmark } from 'react-icons/fi';

const ThumbnailOverlay = styled.div`
    background-image: radial-gradient(
        circle 128px at calc(100% + 20px) calc(-16% + 10px),
        rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)
    ) !important;
    border-radius: 0 0 0 100vw !important;
`

const SaveButton = styled(Button)`
    border-color: #fff;
    color: #fff;
    background: none !important;
    &:hover {
        background: #fff !important;
        color: #000 !important;
        border-color: #fff !important;
    }
`

const NewsCard = () => {
    // var [loading, setLoading] = useState(true);
    var {data, setData, loading, saves, setSaves} = useNews();
    const [isSavedBtn, setIsSavedBtn] = useState(true);

    const saveNews = (news) => {
        // console.log('news ', news)
        var tempNews = JSON.parse(localStorage.getItem('saved'))
        const newsWithId = {...news}
        setSaves([...saves, newsWithId])
        localStorage.setItem('saved', JSON.stringify([...saves, newsWithId]))
        // fetchNews()
    }

    const deleteNews = (url) => {
        const tempNews = saves.filter((news) => news.url !== url)
        setSaves(tempNews)
        localStorage.setItem('saved', JSON.stringify(tempNews))
    }

    const checkIsSaved = (key) => {
        var isSaved = false;
        if(saves != null){
            saves.filter((val) => {
                if(key.url === val.url) {
                    isSaved = true
                }
            })
        }
        return isSaved
    }

    // console.log(data)

    const changeButtonVariant = (e, isSaved, id) => {
        // e.preventDefault();
        if(isSaved) {
            document.getElementById(id).classList.remove('btn-outline-light')
            document.getElementById(id).classList.add('btn-light')
        } else {
            document.getElementById(id).classList.remove('btn-light')
            document.getElementById(id).classList.add('btn-outline-light')
        }
    }

    return (
        <>
            {!loading ? (
                data != null && data != [] ? (data.map((item, index) => (
                <Col xl={4}>
                {/* <h2>{data.length}</h2> */}
                    <Card key={index} className="shadow-sm rounded mb-3">
                        <ThumbnailOverlay className='position-absolute top-0 end-0 w-25 h-25 z-0'></ThumbnailOverlay>
                        <Button 
                        id={'saveBtn' + index} 
                        onClick={(e) => {
                            // console.log('title',item.title)
                            if(checkIsSaved(item)) {
                                deleteNews(item.url)
                                setSaves(JSON.parse(localStorage.getItem('saved')))
                                console.log('deleted')
                                changeButtonVariant(e, false, 'saveBtn' + index)
                            } else { 
                                saveNews(item)
                                setSaves(JSON.parse(localStorage.getItem('saved')))
                                console.log('added')
                                changeButtonVariant(e, true, 'saveBtn' + index)
                            }
                        }} 
                        className='position-absolute top-0 end-0 me-1 mt-1 z-1' 
                        variant={checkIsSaved(item) ? 'light' : 'outline-light'}
                        > 
                            <FiBookmark />
                        </Button>
                        <Card.Img variant="top" onError={({e}) => {
                            e.target.src="https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80"
                            e.onerror = null
                        }} src={!item.urlToImage ? 'https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80' : item.urlToImage} />
                        <Card.Body>
                            <a href={item.url} target='_blank' style={{ textDecoration: 'none', color: '#212529' }}>
                                <Card.Title style={{ textAlign: 'justify', wordSpacing: '-2px'}}>{item.title}</Card.Title>
                            </a>
                            <Card.Text style={{ textAlign: 'justify', wordSpacing: '-2px'}}>
                                {item.content ? (item.content.substring(0, 196) + '...') : ' '} <a href={item.url} target='_blank'>more</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))) : (
                <h4 className='text-center mt-5'>Tidak ada berita tersimpan</h4>
            )
            ) : (
                <Col sm={12} xs={12} className='align-self-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            )}
        </>
    )
}

export default memo(NewsCard)