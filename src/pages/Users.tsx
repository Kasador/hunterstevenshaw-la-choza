import { useEffect, useState } from 'react'
import axios from 'axios'

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
                const res = await axios.get(`${import.meta.env.VITE_API_URLhttp}api/users/`)
                // const res = await axios.get(`http://localhost:4000/api/users/`)
                setUsers(res.data.data)
            } catch (error) {
                console.error('Failed to fetch users:', error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <section className="text-stone-900">
            <h1>Users</h1>
            <ul>
                {users?.map((user: User) => (
                    <li key={user._id}>
                        {user.username} — {user.role}
                    </li>
                ))}
            </ul>
        </section>
    )
}
