import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Dashboard() {

    // const { contacts } = useContext(AppContext);

    return(
        <>
        <div className="menu">
            <h2>Menu</h2>
            <Link to="/contacts">Contact List</Link>
            <Link to="/create">Create New Contact</Link>
        </div>
        <div className="part2">

        </div>
        </>
    );
}