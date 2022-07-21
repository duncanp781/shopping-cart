import "./card-style.css";
import uniqid from "uniqid";

const Card = ({ item, id, submit }) => {
  let { name, image, price } = item;

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(id, e.target[0].value);
  };

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <span>{price}$</span>
      {image ? (
        <img src={image} alt={name} className="image" />
      ) : (
        <div className="image">No Image</div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <input type="num" id="quantity" defaultValue={1}></input>
        <button>Add to Cart</button>
      </form>
    </div>
  );
};


export default Card;
