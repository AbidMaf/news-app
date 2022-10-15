import {createContext, useContext, useState, useEffect} from 'react'

const APIContext = createContext()

function NewsContextProvider({children}) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6c8c55f07ec642d7b968deb80f117e24'

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json.articles);
            setIsLoading(false);
        })
        .catch(error => {
            setIsLoading(false)
        })
    }, [])

    console.log('data1: ', data)

    return (
        <APIContext.Provider value={{data, isLoading}}>
            {children}
        </APIContext.Provider>
    )
}

export default NewsContextProvider;

export function useNewsContext() {
    const context = useContext(APIContext)
    if(context == undefined) {
        throw new Error('useNewsContext must be used within NewsContextProvider')
    }
    return context
}