"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);


    const fetchMealIdeas = async (ingredient) => {
        const response = ingredient
            ? await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            : await fetch("www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
        const data = await response.json();
        return data.meals || []; 
    };

    const loadMealIdeas = async () => {
        if (!ingredient) return;
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };


    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className=" font-bold text-white" >Meal Ideas with {ingredient}:</h1>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-4">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                style={{ width: "100px", height: "100px" }}
                            />
                            <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
                ) : (
                <p className=" font-bold text-white" >No meal ideas found for {ingredient}</p>
                )}
        </div>
    );
}
