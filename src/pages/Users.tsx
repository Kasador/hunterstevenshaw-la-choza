import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Users() {
    type User = {
        _id: string;
        username: string;
        role: string;
    };

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}api/users/`)
                // const res = await axios.get(`http://localhost:4000/api/users/`)
                setUsers(res.data.data)
            } catch (error) {
                console.error('Failed to fetch users:', error)
            }
        }

        fetchUsers()
    }, [])

    const handleEdit = () => {
        console.log('Ready to edit!')
    }

    const handleDelete = () => {
        console.log('Are you sure you want to delete?')
    }

    console.log(users)
    // https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
    return (
        <section className="text-stone-900">
            <h1 className='font-bold text-2xl p-4'>Total Usuarios</h1>
            <table className="w-full divide-y divide-gray-200 shadow-md rounded-tl-lg overflow-hidden m-0">
                <thead className="bg-stone-800 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium">Nombre de Usuario</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Rol de Usuario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                    {users?.map((user: User) => (
                        <tr key={user._id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.username}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">{user.role}</td>
                            <td className='flex align-middle px-6 py-4 whitespace-nowrap text-2xl justify-end mr-10'>
                                <FaEdit className='cursor-pointer hover:text-green-300 text-green-500' onClick={handleEdit} />&nbsp;&nbsp;
                                <MdDeleteForever className='cursor-pointer hover:text-red-300 text-red-500' onClick={handleDelete} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
