"use client";

import {useState} from 'react';

export default  function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    const handlenameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        if (event.target.value >= 0) {
            setAge(event.target.value);
    }};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name: ", name);
        console.log("Breed: ", breed);
        console.log("Age: ", age);

        //reseting the form
        setName("");
        setBreed("");
        setAge("");
    };

    return (
        <div className="m-2">
            <h2 className="text-2xl"> Add a dog</h2>
            <form className="m-2"  onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Name:
                    <input className="text-black"
                    id="name"
                    type="text" 
                    value={name} 
                    onChange={(event) => handlenameChange(event)} />
                </label>

            <label htmlFor="breed">Breed:
                <input className="text-black"
                id="breed"
                type="text"
                value={breed}
                onChange={(event) => setBreed(event.target.value)} />
            </label>

            <label htmlFor="age">Age:
                <input className="text-black"
                id="age"
                type="number"
                value={age}
                onChange={(event) => handleAgeChange(event)} />     
            </label>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>

            </form>

            <div className="text-lg">
                <p>Name: {name.length >= 3 ? name : "Name too short"}</p>
                <p>Breed: {breed}</p>
                <p>Age: {age}</p>
            </div>
        </div>
        
    );
}