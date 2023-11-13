export function Product(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img
          src={props.profile.jpg}
          alt="product-img"
          className="productImage"
        />

        <div className="productCard_-content">
          <h2 className="productName">{props.name}</h2>
          <h3 className="productAge">{props.age}</h3>
          <h3 className="prod">{props.location}</h3>
          <h3>{props.avatarUrl}</h3>
        </div>
      </div>
    </div>
  );
}
