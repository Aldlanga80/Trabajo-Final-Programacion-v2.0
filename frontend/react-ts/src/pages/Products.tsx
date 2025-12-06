import { useEffect, useState } from "react";
import { api } from "./api";


export default function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p._id} className="border p-3 mb-2 rounded">
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}