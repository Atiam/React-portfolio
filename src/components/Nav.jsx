import { Link } from "react-router-dom";

export default function Nav(){
    return (
      <nav>
        {/* <a href="/">Home</a>
        <a href="#">Projects</a>
        <a href="/about">About</a>
        <a href="#">Contact</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    );
}