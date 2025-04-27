import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

// https://api.reactrouter.com/v7/functions/react_router.useLocation.html
export default function Header() {
    // console.log(window.location)
    const [headerTitle, setHeaderTitle] = useState('')
    const getLocation = useLocation();

    useEffect(() => {
        console.log(getLocation.pathname.substring(1))
        const getHeaderTitle = getLocation.pathname.substring(1)
        if (getHeaderTitle === '') { // if its empty or index, we do Dashboard
            setHeaderTitle('Dashboard')
        } else {
            setHeaderTitle(getHeaderTitle.charAt(0).toUpperCase() + getHeaderTitle.slice(1))
        }
    },[getLocation]) // if the url changes, then reload it, because my header is only loaded once. and then the routes will change the router (URL)
    return (
        <header className="w-full h-20 p-4 bg-stone-600 shadow-lg fixed top-0 right-0 left-55 m-5 rounded-3xl flex items-center">
            <h1 className="text-2xl font-bold">{headerTitle}</h1>
        </header>
    )
}