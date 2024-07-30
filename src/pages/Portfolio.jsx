export default function Portfolio(){

    const array = [0,1,2]
    return (
      <>
        <h2>Portfolio</h2>
      <div>
        {array.map((item) => (
          <div key={item}>
            <h3>Project {item}</h3>
            <p>Project description</p>
          </div>
        ))}
      </div>

        </>
        );
    }