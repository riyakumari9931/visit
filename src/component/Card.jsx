import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  //yaha pe readmore ke adhar pe description ka value nikalte hai

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  function readmoreHender() {
    setReadmore(!readmore);
  }
  return (
    <div>
      <div className="card">
        <img src={image} className="image" alt="hello" srcset="" />
        <div className="tour-info">
          <div className="tour-details">
            <h4 className="price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>
          <div className="description">
            {description}
            // switching logic
            <span className="read-more" onClick={readmoreHender}>
              {readmore ? `show less` : `read more`}
            </span>
          </div>
        </div>
        <div className="button">
          <button className="btn-red" onClick={() => removeTour(id)}>
            not intrested
          </button>

          <button className="btn-re">intrested</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
