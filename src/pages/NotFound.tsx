import Error from "../assets/images/404.png"
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function NotFound() {
    return (
        <section className="text-stone-900 flex flex-col items-center my-15">
            <img src={Error} alt="404 Error" className="w-100"/>
            <h1 className="text-4xl font-extrabold finger-paint-regular">&#xa1;Ay! Aparace que est&#225;s perdido... </h1>
            <button className="px-4 py-2 text-3xl cal-sans-regular rounded border-2 cursor-pointer my-8 hover:bg-amber-500 bg-stone-100 transition-colors duration-300">
                <a href="/" className="flex items-center">Atr&#225;s &nbsp; <IoReturnUpBackOutline /></a> 
            </button>
        </section>
    )
}