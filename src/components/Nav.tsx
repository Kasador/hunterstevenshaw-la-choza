import Logo from '../assets/images/logo.png'

export default function Nav() {
    return (
        <nav className="w-50 bg-green-700 h-full absolute">
            <img src={Logo} alt="La Choza Logo" className='w-35 m-auto'/>
        </nav>
    )
}