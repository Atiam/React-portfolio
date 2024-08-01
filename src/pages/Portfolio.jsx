import portfolioData from "../components/portfolioData.json"
import {Link} from "react-router-dom";
export default function Portfolio(){

    
    return (
      <>
        <h2>Portfolio</h2>
      <div>
        {portfolioData.map((item) => (
          <div key={item}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} style={{ width: 480 }} />
            <p>{item.explain} </p>
            <Link to={item.url} style={{ width: 480 }} >Deployed url</Link>
            <Link to={item.repourl} style={{ width: 480 }} >repo url</Link>
          </div>
        ))}
      </div>

        </>
        );
    }