"use client";
import Item from './item.js';
import { useState } from 'react';

export function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    // Create a new sorted array based on the current sorting option
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0; 
    });

    return (
        <main className="m-1">
            <div className="flex justify-center items-center space-x-2">
                <button
                    className={`space-x-2 px-4 py-2 rounded-xl h-full ${sortBy === 'name' ? "bg-gray-700" : "bg-emerald-700 hover:bg-emerald-900"} text-white`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name 
                </button>
                <button
                    className={`px-4 py-2 rounded-xl h-full ${sortBy === 'category' ? "bg-gray-700" : "bg-emerald-700 hover:bg-emerald-900"} text-white`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </main>
    );
}
