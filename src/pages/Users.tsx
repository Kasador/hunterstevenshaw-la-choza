import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";

// Dev Notes: Need error handling still, but CRUD operations work now!

export default function Users() {
    type User = {
        _id: string;
        username: string;
        role: string;
    };

    const [users, setUsers] = useState<User[]>([]); // array of user data
    const [modalType, setModalType] = useState<'edit' | 'delete' | 'add' | null>(null); // If true, open specific modal
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // check what user is selected


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

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setModalType('edit');
      };
      
      const handleDelete = (user: User) => {
        setSelectedUser(user);
        setModalType('delete');
      };
      
      const handleNewUser = () => {
        setSelectedUser(null);
        setModalType('add');
      };
      

    console.log(users) // data
    // https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
    // https://stackoverflow.com/questions/73699858/why-my-property-does-not-exist-on-type-never/73700310
    // https://stackoverflow.com/questions/52325814/why-we-are-using-htmlinputelement-in-typescript
    return (
        <section className="text-stone-900">
            {/* <h1 className='font-bold text-2xl p-4'>Total Usuarios</h1> */}
            <button type='button' className='font-bold text-md p-2 m-2 border-2 rounded bg-stone-800 text-stone-100 flex items-center cursor-pointer hover:bg-stone-500'
                onClick={handleNewUser}
            >
                Nuevo Usuario&nbsp; <TiUserAdd className='text-green-500'/>
            </button>
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.role}</td>
                            <td className='flex align-middle px-6 py-4 whitespace-nowrap text-2xl justify-end mr-10'>
                                {/* <FaEdit className='cursor-pointer hover:text-green-300 text-green-500' onClick={() => handleEdit(user)} />&nbsp;&nbsp;
                                <MdDeleteForever className='cursor-pointer hover:text-red-300 text-red-500' onClick={() => handleDelete(user)} /> */}
                                {user.username !== 'admin' ? (
                                    <>
                                        <FaEdit
                                            className="cursor-pointer hover:text-green-300 text-green-500"
                                            onClick={() => handleEdit(user)}
                                        />  &nbsp;&nbsp;
                                        <MdDeleteForever
                                            className="cursor-pointer hover:text-red-300 text-red-500"
                                            onClick={() => handleDelete(user)}
                                        />
                                    </>
                                ) : (
                                    <span className="text-stone-400 text-sm italic">S&#250;per admin</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalType && ( 
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
                    {/* Delete Modal */}
                    {modalType === 'delete' && selectedUser && (
                    <>
                        <h2 className="text-xl font-bold mb-4">¿Eliminar usuario?</h2>
                        <p className="mb-4">¿Seguro que deseas eliminar a <strong>{selectedUser.username}</strong>?</p>
                        <div className="flex justify-end gap-4">
                        <button onClick={() => setModalType(null)} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">Cancelar</button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                            onClick={async () => {
                                await axios.delete(`${import.meta.env.VITE_API_URL}api/users/${selectedUser._id}`);
                                setUsers(users.filter(user => user._id !== selectedUser._id)); // find selected user

                                setModalType(null); // close modal
                            }}
                        >
                            Eliminar
                        </button>
                        </div>
                    </>
                    )}

                    {/* Edit Modal */}
                    {/* Dev Notes:  Thinking of disabling the change of the user's username. If they need to change it, delete it, and make a new one. */}
                    {modalType === 'edit' && selectedUser && ( // https://www.geeksforgeeks.org/how-to-set-default-value-in-select-using-reactjs/#
                    <>
                        <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>
                        <input
                            type="text"
                            className="border p-2 w-full mb-4"
                            defaultValue={selectedUser.username}
                            onChange={(e) => setSelectedUser({ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                                ...selectedUser, // spread operator 
                                username: e.target.value
                            })}
                        />
                        <select
                            className="border p-2 w-full mb-4"
                            defaultValue={selectedUser.role}
                            onChange={(e) => setSelectedUser({ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                                ...selectedUser, // spread operator 
                                role: e.target.value
                            })}
                        >
                            { /* User's Options */ }
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                        <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => setModalType(null)} // close modal
                            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={async () => {
                                if (!selectedUser) { // for Typescript, but also error handling
                                    return
                                }

                                await axios.put(`${import.meta.env.VITE_API_URL}api/users/${selectedUser._id}`, {
                                    username: selectedUser.username,
                                    role: selectedUser.role,
                                });

                                setUsers(
                                    users.map((user) => // create new array, then 
                                        user._id === selectedUser._id ? { ...user, username: selectedUser.username, role: selectedUser.role } : user
                                    ) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
                                );

                                setModalType(null); // close modal
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
                        >
                            Guardar
                        </button>
                        </div>
                    </>
                    )}

                    {/* Add Modal */}
                    {modalType === 'add' && (
                    <>
                        <h2 className="text-xl font-bold mb-4">Nuevo Usuario</h2>
                        <form
                            onSubmit={async (e) => { // https://stackoverflow.com/questions/72788643/htmlformelement-null-is-not-assignable-to-parameter-of-type-string-typescript
                                e.preventDefault(); // prevent default 

                                const form = e.target as HTMLFormElement;
                                const username = (form.username as HTMLInputElement).value; // name fields connects the data to the inputs
                                const password = (form.password as HTMLInputElement).value;

                                await axios.post(`${import.meta.env.VITE_API_URL}api/users/`, { username, password });
                                const res = await axios.get(`${import.meta.env.VITE_API_URL}api/users/`);
                                // fetchUsers()
                                setUsers(res.data.data);

                                setModalType(null); // close modal (maybe add a success gif?)
                            }}
                        >
                        <input name="username" type="text" placeholder="Username" required className="border p-2 w-full mb-2" />
                        <input name="password" type="password" placeholder="Password" required className="border p-2 w-full mb-4" />
                        <div className="flex justify-end gap-4">
                            <button type="button" onClick={() => setModalType(null)} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">Cancelar</button>
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">Crear</button>
                        </div>
                        </form>
                    </>
                    )}
                </div>
            </div>
            )}

        </section>
    )
}
