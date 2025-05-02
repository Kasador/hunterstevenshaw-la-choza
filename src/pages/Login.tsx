import Logo from '../assets/images/logo.png'
import { FaSignInAlt } from "react-icons/fa";

export default function Login() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 text-stone-900 flex-col pb-50">
            <img src={Logo} alt="404 Error" className="w-40"/>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Usuario</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu usuario"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
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
