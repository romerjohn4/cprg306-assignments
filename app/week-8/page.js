"use client";

import { useState } from "react";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (name, quantity, category) => {
        const newItem = {
            name,
            quantity,
            category
        };

        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name
        let cleanedName = item.name
            .replace(/[\d]/g, '') // Remove numbers
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C[\uDC00-\uDFFF]|[\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E[\uDD10-\uDDFF])/g, '') // Remove emojis
            .trim(); // Remove leading/trailing spaces

        // Check if the name contains a comma
        const commaIndex = cleanedName.indexOf(',');
        if (commaIndex !== -1) {
            // If there is a comma, keep everything before the comma
            cleanedName = cleanedName.slice(0, commaIndex).trim();
        }

        setSelectedItemName(cleanedName);
    };

    return (
        <main className="mx-auto p-4 bg-gray-500">
            <h1 className="text-3xl font-bold text-center text-white">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <div className="w-1/2 p-4"> 
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </main>
    );
}
