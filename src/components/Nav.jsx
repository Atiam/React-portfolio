import { Link } from "react-router-dom";

export default function Nav(){
    return (
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    );
}