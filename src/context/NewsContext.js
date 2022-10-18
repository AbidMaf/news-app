import { useEffect, useState, createContext, useReducer, useMemo } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import AppReducer from './AppReducer'

const initialState = {
    news: []
}

export const NewsContext = createContext(null);

const NewsContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [saves, setSaves] = useState([])
    const [archived ,setArchived] = useState([])
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // console.log('saves ',saves)
    const saveNews = (news) => {
        // console.log('news ', news)
        var tempNews = JSON.parse(localStorage.getItem('saved'))
        setSaves(...tempNews)
        console.log('saves', saves)
        localStorage.setItem('saved', JSON.stringify([...saves, news]))
        // dispatch({
        //     type: 'SAVE_NEWS',
        //     payload: news
        // })
    }

    const fetchSaved = () => {
        const saved = JSON.parse(localStorage.getItem('saved'))
        // setData(state.news)
        setData(saved)
        setLoading(false)
    }

    const archivedNews = () => {
        const saved = JSON.parse(localStorage.getItem('saved')) 
        setArchived(saved)
        // setArchived(state.news)
    }

    // useEffect(() => {
    //     localStorage.setItem('saved', JSON.stringify(saves))
    // }, [state])

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
        <NewsContext.Provider value={{ data, loading, saveNews, archived }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider