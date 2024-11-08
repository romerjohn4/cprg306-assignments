"use client";

import { useState, useEffect } from "react";
import { getItems, addItems } from "../_services/shopping-list-service";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { auth } from "../_utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Page() {
    const [items, setItems] = useState([]); 
    const [selectedItemName, setSelectedItemName] = useState(""); 
    const [user, setUser] = useState(null); 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); 
            } else {
                setUser(null); 
                setItems([]);
            }
        });

        return () => unsubscribe();
    }, []);


    useEffect(() => {
        if (user?.uid) {
            loadItems();
        }
    }, [user]); 


    const loadItems = async () => {
        if (user?.uid) {
            try {
                const userItems = await getItems(user.uid); 
                setItems(userItems); 
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    };

 
    const handleAddItem = async (name, quantity, category) => {
        const newItem = { name, quantity, category };

        try {
            const newItemId = await addItems(user.uid, newItem); 
            setItems((prevItems) => [
                ...prevItems,
                { id: newItemId, ...newItem }, 
            ]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };


    const handleItemSelect = (item) => {
        let cleanedName = item.name
            .replace(/[\d]/g, '') 
            .replace(/[\u2700-\u27BF]/g, '') 
            .trim(); 


        const commaIndex = cleanedName.indexOf(',');
        if (commaIndex !== -1) {
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
