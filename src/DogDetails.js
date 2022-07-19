import { useParams } from "react-router-dom";


/** Display details of a single dog.
 * 
 *  Props:
 *  - dogs: [{name, age, src, facts: [fact, fact, ...]}, ... ]
 * 
 *  App -> DogDetails
 */

function DogDetails({ dogs }) {
    console.log("in DogDetails", dogs);
    const { name } = useParams();

    let dog = dogs.filter(dog => dog.name === name)[0];
    console.log("dog is:", dog);
    const imageSrc = ("../public/" + dog.name + ".jpg");

    return (
        <div>
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <img src={imageSrc}></img>
            <p>Facts:
                <ul>
                    {dog["facts"].map((fact, idx) => (
                        <li key={idx}>
                            {fact}
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default DogDetails;