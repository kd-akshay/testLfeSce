import "./card.css";
export const Card = (prop) => {
  return (
    <div className="cardCustom">
      <div>{prop.name}</div>
      {prop.url}
      <img src={prop.url} />
    </div>
  );
};
