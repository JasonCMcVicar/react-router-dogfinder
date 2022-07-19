import { Link } from "react-router-dom";

/** Display some details of all dogs and provide link tag
 *
 *  props:
 *  - dogs: [{name, age, src, facts: [fact, fact, ...]}, ... ]
 *
 * App --> DogList (showing list of dogs)
*/


function DogList({ dogs }) {


  return (

    <div>
      {dogs.map((dog,idx) => (
        <div key={idx}>
          <p>{dog.name}</p>
          <img src={`/${dog.src}.jpg`} alt={dog.name}/>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </div>
      ))}



    </div>

);

}

export default DogList;
