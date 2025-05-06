import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

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
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{headerTitle}</h1>
                <div className='absolute right-75 top-2.5 flex items-center flex-col'>
                    <span className='text-lg text-stone-200'>Iniciado sesi&#243;n como</span>
                    <div className='flex items-center text-amber-200'>
                        <span className='text-2xl'>{localStorage.getItem('username')}</span>&nbsp;&nbsp;
                        <FaRegUserCircle className='text-3xl'/>
                    </div>
                </div>
            </div>
        </header>
    )
}