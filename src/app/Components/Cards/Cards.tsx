
import './Card.css'; 

const Card = ({ svg, title, description }:any) => {
  return (
    <div className="card">
      <div className="svgTitle">
        {svg}
        <h2 className="cardH1">{title}</h2>
      </div>
      <div className="cardText">        
        <p className="cardP">{description}</p>
      </div>
    </div>
  );
};

export default Card;