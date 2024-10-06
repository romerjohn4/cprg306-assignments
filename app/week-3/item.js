export default function Item(props) {
    return (
        <section className="border p-2 m-2 bg-emerald-700 border-gray-300 rounded-3xl shadow-2xl border-2">
            <ul>
                <li className="font-bold text-white">
                    Name: {props.name}
                </li>
                <li className="font-bold text-white">
                    Quantity: {props.quantity}
                </li>
                <li className="font-bold text-white">
                    Category: {props.category}
                </li>
            </ul>
        </section>
    );
}










































