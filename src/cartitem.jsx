import "./assets/cartitem.css";

export default function CartItem(props) {
  // { item,onUpdateCartQty,onRemoveFromCart }
  const handleUpdateCartQty = (lineItemId, quantity) => {
    props.onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    props.onRemoveFromCart(props.item.id);
  };

  return (
    <div className="cartitem__container">
      {props.item && (
        <>
          <img
            className="cart__product_img"
            src={props.item.image.url}
            alt={props.item.name}
          />
          <div className="cart-item__details">
            <h4 className="cart-item__details-name">{props.item.name}</h4>
            <div className="cart-item__details-qty">
              <button
                type="button"
                onClick={() =>
                  props.item.quantity > 1
                    ? handleUpdateCartQty(
                        props.item.id,
                        props.item.quantity - 1
                      )
                    : handleRemoveFromCart()
                }
              >
                -
              </button>

              <p>{props.item.quantity}</p>

              <button
                type="button"
                onClick={() =>
                  handleUpdateCartQty(props.item.id, props.item.quantity + 1)
                }
              >+</button>
            </div>
            <div className="cart-item__details-price">
              {props.item.line_total.formatted_with_symbol}
            </div>
          </div>
          <button
            type="button"
            className="cart-item__remove"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}
