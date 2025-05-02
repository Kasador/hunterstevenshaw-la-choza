import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
    
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: "", quantity: "", price: "" });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:4000/api/products");
        setProducts(res.data);
    };

    // https://stackoverflow.com/questions/56562153/react-typescript-onsubmit-e-preventdefault-not-working
    // https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingId) {
            await axios.put(`http://localhost:4000/api/products/${editingId}`, form);
        } else {
            await axios.post("http://localhost:4000/api/products", form);
        }
        setForm({ 
            name: "",
            quantity: "",
            price: ""
        });

        setEditingId(null);
        fetchProducts();
    };

    interface Product {
        _id: string;
        id: string;
        name: string;
        quantity: number;
        price: number;
        image: string;
      }
      

    const handleEdit = (product: Product) => {
        // temp solution until backend API done.
        setForm({ 
            name: product.name,
            quantity: product.quantity,
            price: product.price
         });

        setEditingId(product._id);
    };

    const handleDelete = async (id: Product) => {
        await axios.delete(`http://localhost:4000/api/products/${id}`);
        fetchProducts();
    };

    // https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler
    return (
        <section className="p-6 text-stone-900 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow mb-6">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Precio (S/.)"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="border p-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {editingId ? "Actualizar" : "Agregar Producto"}
                </button>
            </form>

            <ul className="space-y-2">
                {products.map((product: Product) => (
                    <li
                        key={product._id}
                        className="flex justify-between items-center bg-white p-3 rounded shadow"
                    >
                        <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-stone-600">Cantidad: {product.quantity} — S/.{product.price}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => handleEdit(product)}
                                className="text-blue-600 hover:underline"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="text-red-600 hover:underline"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
