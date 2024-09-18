import { ItemList } from "./item-list.js";

export default function Page() {
    return (
        <main className="mx-auto p-4 bg-emerald-900">
            <h1 className="text-3xl font-bold text-center text-white">Shopping List</h1>
            <ItemList />
        </main>
    );
}
