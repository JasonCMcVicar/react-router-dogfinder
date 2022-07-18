import React from "react";
import { Link } from "react-router-dom";

const defaultDogs = ["Rex", "Lil Bow-Wow", "Francis"];

/** Display links to each individual dog and list of all dogs. 
 * 
 *  Props:
 *  - names: ["name", "name", ... ]
*/
function Nav({ names=defaultDogs }) {
    return (
        <ul>
            {names.map(name => (
                <li key={name}>
                    <Link to={`/dogs/${name}`}>{name}</Link>
                </li>
            ))}
            <li>
                <Link to="/dogs">All Dogs!</Link>
            </li>
        </ul>
    );
}

export default Nav;