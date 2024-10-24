"use client";

import {useState, useEffect} from "react";


export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    const getRandomDog = async (breed) => {
        const repsonse = breed 
            ? await fetch (`https://dog.ceo/api/breed/${breed}/images/random`) 
            : await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await repsonse.json(); // data is a promise
        //const data = response.json(); // data is a promise and not the actual data
        const url = data.message;  // message is the url of the dog
        setRandomDogUrl(url);
    };

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
            setDogBreeds(breeds);
        };

    const handleBreedChange = (event) => {
        // alert(event.target.value); //just to see if it works
        setSelectedBreed(event.target.value);
    };

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []); // empty array means only run once

    useEffect(() => {
        if (selectedBreed === "") return
        getRandomDog(selectedBreed);
    }, [selectedBreed]); // only run when selectedBreed changes

    return (
        <div>
            <h1>DOGGOS</h1>
            <div>
                <select onChange={handleBreedChange}>
                {dogBreeds.map((breed) => (
                    <option key = {breed} value={breed}>
                    {breed}
                    </option>
                ))}
                </select>
            </div>
            <img src={randomDogUrl}/>
            </div>
        );
    }