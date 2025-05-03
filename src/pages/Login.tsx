// import react from 'react';
import { useState } from 'react';
import Logo from '../assets/images/logo.png'
import { FaSignInAlt } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// interface IInputs {
//     username: string;
//     password: String;
// }

export default function Login() {
    // const [users, setUsers] = useState([]);
    // const [input, setInput] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchUser();
        // alert('submited')
    }

    const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = e.currentTarget.value;
        console.log(val, 'username')
        setUsername(val)
    }

    const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = e.currentTarget.value;
        console.log(val, 'password')
        setPassword(val)
    }

    const fetchUser = async () => {
        try {
            const res = await axios.post('http://localhost:4000/api/login', {
                username,
                password
            });
            // setUsers(res.data);
    
            localStorage.setItem('token', res.data.token);
            navigate('/')
            // setUsername(username)
            // setPassword(password)
        } catch (error) {
            alert('invalid username or password')
            console.error(error, 'Ay, hay error(s).')
        }
    };

    // https://stackoverflow.com/questions/56562153/react-typescript-onsubmit-e-preventdefault-not-working
    // https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler
    return (
        <section className="min-h-screen flex items-center justify-center bg-stone-300 text-stone-900 flex-col pb-50">
            <img src={Logo} alt="404 Error" className="w-40"/>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesi&#243;n</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Usuario</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu usuario"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={username}
                            onChange={updateUsername}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Contrase&#241;a</label>
                        <input
                            type="password"
                            placeholder="Ingresa tu contrase&#241;a"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={password}
                            onChange={updatePassword}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors cursor-pointer flex items-center text-2xl font-bold justify-center"
                    >
                        Entrar &nbsp; <FaSignInAlt />
                    </button>
                </form>
            </div>
        </section>
    );
}
