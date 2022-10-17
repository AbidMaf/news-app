import { useEffect, useState, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const NewsContext = createContext(null);
export const NewsURL = createContext(null);

const NewsContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const location = useLocation();
    console.log('location ', location);

    var url = 'https://newsapi.org/v2/everything?q=programming+AND+code+AND+developer+OR+dev&searchin=title&apiKey=6f8a7aa368ce4ade956a2f95d689eddc';
    if(location.pathname === '/programming'){
        url = 'https://newsapi.org/v2/everything?q=programming+AND+code&apiKey=6f8a7aa368ce4ade956a2f95d689eddc';
    } else if(location.pathname === '/covid'){
        url = 'https://newsapi.org/v2/everything?q=covid-19&searchin=title&sortBy=publishedAt&apiKey=6c8c55f07ec642d7b968deb80f117e24';
    } else if(location.pathname === '/home' || location.pathname === '/'){
        url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=6c8c55f07ec642d7b968deb80f117e24'
    } else if(location.pathname === '/search'){
        const keyword = searchParams.get('query');
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=6c8c55f07ec642d7b968deb80f117e24`
    }

    useEffect(() => { 
        // fetchNews()
        if (!data) return
        axios.get(url)
        .then((res) => {
            setData(res.data.articles)
            setLoading(false)
            console.log(res.data.articles)
        })
        .catch((err) => console.log('error ', err))
        // setData(data) 
    }, [])
     
    // debugger
    // console.log('data1 ', data) 
    return (
        <NewsContext.Provider value={{ data, loading }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider