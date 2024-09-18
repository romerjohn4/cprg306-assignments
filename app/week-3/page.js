import Dog from "./dog";

export default function Page() {
    let dog1 = {
        name: "Buddy",
        breed: "Golden Retriever",
        age: 11,
        colour: "brown",
    };

    let dog2 = {
        name: "Dingo",
        breed: "German Shepherd",
        age: 5,
        colour: "golden",
    };

    let dog3 = {
        name: "Rex",
        breed: "Labrador",
        age: 1,
        colour: "white",
    };

    return (
        <main className="m-2">

            <h2 className="text-2xl font-bold">Meet My Dogs</h2>
            
            <Dog
                name={dog1.name}
                breed={dog1.breed}
                age={dog1.age}
                colour={dog1.colour}
            />
            <Dog
                name={dog2.name}
                breed={dog2.breed}
                age={dog2.age}
                colour={dog2.colour}
                />
            <Dog
                name={dog3.name}
                breed={dog3.breed}
                age={dog3.age}
                colour={dog3.colour}
                />
        </main>
    );

}