import "./Card.scss";

const Card = (props) => {
	const finalPrice = props.price.finalPrice;
	const currency = props.price.currency;
	const regularPrice = props.price.regularPrice;

	return (
		<div onClick={props.clicked} className="Card-wrapper">
			<div className="Card-imgBox">
				<img src={props.image} alt="img"></img>
			</div>
			<div className="Card-textBox">
				<p>{props.brand}</p>
				<h3>{props.title} </h3>
				<div>
					{props.hasDiscount === true ? (
						<span className="Card-price">
							{regularPrice} {currency}
						</span>
					) : null}
					<span className="Card-priceDiscount">
						{finalPrice} {currency}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
