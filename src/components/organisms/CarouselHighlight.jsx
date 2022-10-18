import {
    Carousel,
    Figure
} from 'react-bootstrap'
import React, {useState, useEffect, useContext} from 'react'
import { NewsContext } from '../../context/NewsContext';
import styled from 'styled-components';

const NewsImage = styled.img`
    height: 640px;
    max-height: 720px;
    object-fit: cover;
`

const StyledCaption = styled(Carousel.Caption)`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
    width: 100%;
    /* height: 25%; */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    color: #fff;
    text-align: left;
`

const CarouselHighlight = () => {
    var [loading, setLoading] = useState(true);
    var {data, loading} = useContext(NewsContext);

    return (
        <>
            {!loading ? (
                <Carousel fade> 
                    {data.splice(1, 3).map((item, index) => (
                        <Carousel.Item key={index}>
                            <NewsImage
                            className="d-block w-100"
                            src={!item.urlToImage ? 'https://marketingapi.planar.com/media/zlml1rmd/tv-markiza-2.jpg?watermark=PHOTO%20COURTESY%20OF%20PLANAR.%20ALL%20RIGHTS%20RESERVED%20BY%20COPYRIGHT%20OWNER&color=fff&fontsize=12&textposition=5,1260&dropshadow=true&fontfamily=arial&quality=80' : item.urlToImage}
                            />
                            <StyledCaption>
                                <a href={item.url} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </a>
                            </StyledCaption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Figure>
                    <Figure.Image
                        className="d-block w-100"
                        width={1920}
                        height={720}
                    />
                </Figure>
            )}
        </>
    )
}

export default CarouselHighlight
