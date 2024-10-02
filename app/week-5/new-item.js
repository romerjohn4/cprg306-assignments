"use client"

import React, { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const decrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity)); 
    };

    const increment = () => {
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity)); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name: ", name);
        console.log("Category: ", category);
        console.log("Quantity: ", quantity);

        // Only show alert if name is empty on form submission
        if (name === "") {
            alert("Please enter an item name.");
            return;
        }

        alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // Resetting the form
        setName("");
        setCategory("Produce");
        setQuantity(1);
    }

    return ( 
<div className="flex justify-center items-center p-4">
  <div className="text-center bg-gray-800 p-10 w-96 space-y-4">

    {/* Item Name */}
    <form className="w-full max-w-xs mx-auto space-y-4" onSubmit={(event) => handleSubmit(event)}>
      <label className="w-full">
        <input
          className="text-black p-2 w-full h-12 rounded-xl ring ring-gray-300"
          placeholder="Item Name"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      {/* Quantity buttons and Category dropdown in a row */}
      <div className="flex justify-center items-center space-x-4 w-full ">
        {/* Quantity buttons */}
        <div className="flex justify-center items-center space-x-2 bg-white p-1 rounded-xl w-full h-12 ring ring-gray-300">
          <p className="mb-0 text-black text-xl">{quantity}</p>

          <button className={`px-4 py-2 rounded-xl h-full  ${quantity === 1 ? "bg-gray-500" : "bg-emerald-700 && hover:bg-emerald-900"} text-white`}type="button"onClick={decrement}>-</button>
          <button className={`px-4 py-2 rounded-xl h-full ${quantity === 20 ? "bg-gray-500" : "bg-emerald-700 && hover:bg-emerald-900"} text-white`}type="button"onClick={increment}>+</button>

        </div>

        {/* Category dropdown */}
        <label htmlFor="category" className="w-full">
          <select
            className="text-black rounded-xl p-2 w-full h-12 ring ring-gray-300"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen">Frozen Foods</option>
            <option value="Canned">Canned Goods</option>
            <option value="Dry">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      {/* Submit button */}
      <div className="w-full">
        <button className="hover:bg-emerald-900 text-white font-bold h-12 w-full rounded-xl bg-emerald-700"type="submit">+</button>
      </div>
    </form>

  </div>
</div>


    );
}




