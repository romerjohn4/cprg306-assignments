"use client";

import { useState } from "react";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (name, quantity, category) => {
        const newItem = {
            name,
            quantity,
            category
        };

        setItems([...items, newItem]);
    };

    return (
        <main className="mx-auto p-4 bg-gray-500">
            <h1 className="text-3xl font-bold text-center text-white">Shopping List</h1>

            <NewItem onAddItem={handleAddItem} />

            <ItemList items={items} />
        </main>
    );
}
