export default function Dog( {name, breed, age, colour} ) {
    return(
    <section className="border p-2 m-2 bg-neutral-500">
        <p className="text-xl font-bold text-violet-900">Name: {name}</p>
        <p className="font-bold">Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Colour: {colour}</p>
</section>
    );
}