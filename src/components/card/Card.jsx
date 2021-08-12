import "./card.css";

export default function Card({ name, imageUrl, info, location}) {
  return (
    <div className="card">
        <img className="card-img" src={imageUrl} alt="" />
        <h4 className="card-title">{name}</h4>
        <h5 className="card-location">{location}</h5>
        <h5 className="card-info">{info}</h5>
    </div>
  );
}
