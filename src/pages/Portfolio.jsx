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
            <img src={item.image} alt={item.title} />
            <p>{item.explain}</p>
            <Link to={item.url} >Deployed url</Link>
            <Link to={item.repourl}>repo url</Link>
          </div>
        ))}
      </div>

        </>
        );
    }