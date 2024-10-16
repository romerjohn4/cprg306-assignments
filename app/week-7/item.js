export default function Item({ name, quantity, category }) {
    return (
        <section className="border p-2 m-2 bg-emerald-700 border-black rounded-3xl shadow-2xl border-2">
            <ul>
                <li className="font-bold text-white">Name: {name}</li>
                <li className="font-bold text-white">Quantity: {quantity}</li>
                <li className="font-bold text-white">Category: {category}</li>
            </ul>
        </section>
    );
}










































