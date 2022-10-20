import { useEffect, useState, createContext, useReducer, useMemo } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const NewsContext = createContext(null);

const NewsContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [saves, setSaves] = useState([])
    const [archived ,setArchived] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3500);
    }, [])

    const savedNews = JSON.parse(localStorage.getItem('saved'))
    useEffect(() => {
        if(savedNews == null) {
            setSaves([])
        } else{
            setSaves(savedNews)
        }
    }, [])

    // console.log('saves ',saves)
    const saveNews = (news) => {
        // console.log('news ', news)
        var tempNews = JSON.parse(localStorage.getItem('saved'))
        const id = uuidv4()
        const newsWithId = {...news}
        setSaves([...saves, newsWithId])
        localStorage.setItem('saved', JSON.stringify([...saves, newsWithId]))
    }

    const deleteNews = (url) => {
        const tempNews = saves.filter((news) => news.url !== url)
        setSaves(tempNews)
        localStorage.setItem('saved', JSON.stringify(tempNews))
    }

    const fetchSaved = () => {
        // setData(state.news)
        setData(savedNews)
        setLoading(false)
    }

    const archivedNews = () => {
        setArchived(savedNews)
        // setArchived(state.news)
    }

    const location = useLocation();
    var url = '';
    if(location.pathname === '/programming'){
        url = 'https://newsapi.org/v2/everything?q=programming+AND+code+OR+developer&searchin=title&apiKey=6c8c55f07ec642d7b968deb80f117e24';
    } else if(location.pathname === '/covid'){
        url = 'https://newsapi.org/v2/everything?q=covid-19&searchin=title&sortBy=publishedAt&apiKey=6c8c55f07ec642d7b968deb80f117e24';
    } else if(location.pathname === '/home' || location.pathname === '/'){
        url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=6c8c55f07ec642d7b968deb80f117e24'
    } else if(location.pathname === '/search'){
        const keyword = searchParams.get('query');
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=6c8c55f07ec642d7b968deb80f117e24`
    }

    const fetchNews = async () => {
        if (!data) return
        try {
            const result = await axios(url);
            setData(result.data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(location.pathname === '/saved') {
            fetchSaved()
            archivedNews()
        } else { 
            fetchNews()
            archivedNews()
        }; 
        // fetchNews()
    }, [])
     
    // debugger
    // console.log('data1 ', data) 
    return (
        <NewsContext.Provider value={{
            data,
            setData,
            loading,
            saveNews,
            deleteNews,
            archived,
            setArchived
            }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider