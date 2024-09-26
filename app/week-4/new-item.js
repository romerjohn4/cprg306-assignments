"use client"

import React from 'react';
import {useState} from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity)); 
    };

    const increment = () => {
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity)); 
    };

    return ( 
    <div className="flex justify-center items-center p-4">
        <div className="text-center bg-emerald-900 p-2">
            <div className=" flex items-center space-x-2">
          <p className="mb-0 text-white text-xl mr-6 ml-2">{quantity}</p>

          <button className={`px-4 py-1 rounded-xl ${ quantity === 1 ? 'bg-gray-500' : 'bg-emerald-700'} text-white shadow-2xl`} onClick={decrement}>-</button>

          <button className={`px-4 py-1 rounded-xl ${ quantity === 20 ? 'bg-gray-500' : 'bg-emerald-700'} text-white shadow-2xl`} onClick={increment}>+</button>

            </div>
        </div>
    </div>
    );
}