import React, { useState, useEffect } from "react";
import "./App.scss";
import { APP_TITLE, PRODUCTS } from "./data/data";
import Card from "./components/Card/Card";
import Search from "../src/data/svg/search";
import { connect } from "react-redux";
import { actionTypes } from "../src/store/actions";

const types = {
	brand: "brand",
	title: "title",
	price: "price",
};

const App = (props) => {
	const [data, setData] = useState([]);
	const [sortType, setSortType] = useState("brand");
	const [searchTerm, setSearchTerm] = useState("");
	// const [selectedProducts, setSelectedProducts] = useState([]);

	// const clicked = (id) => {
	// 	const newArray = [...selectedProducts];
	// 	newArray.push(PRODUCTS[id - 1]);
	// 	setSelectedProducts(newArray);
	// };

	//onchange events for search and sort
	const onChangeSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const onChangeSort = (e) => {
		setSortType(e.target.value);
	};

	useEffect(() => {
		//sort dropdown brand, title, price
		const sortArray = (type) => {
			const sortProperty = types[type];
			const sorted = [...PRODUCTS].sort((a, b) =>
				type === "price"
					? b[sortProperty].finalPrice - a[sortProperty].finalPrice
					: a[sortProperty].localeCompare(b[sortProperty])
			);
			setData(sorted);
		};
		sortArray(sortType);

		//filter for quick search
		if (!searchTerm) {
			setData([]);
		} else
			setData((d) =>
				d.filter(
					(object) =>
						object.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						object.brand.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
	}, [sortType, searchTerm]);

	//sort options array
	const sortOptions = [
		{ name: "Sort By", value: "" },
		{ name: "Brand", value: "brand" },
		{ name: "Title", value: "title" },
		{ name: "Price", value: "price" },
	];

	return (
		<div className="App">
			<header className="App-header">
				<p>{APP_TITLE}</p>
			</header>
			<main className="App-main">
				<div className="App-main-category">
					<h2>Category</h2>
					<Search class="Svgg"></Search>
					<div>
						<input
							className="inputSearch"
							placeholder="Search"
							onChange={(e) => onChangeSearch(e)}
							value={searchTerm}
						></input>
						<select
							className="selectSort"
							onChange={(e) => (e.target.value === "" ? null : onChangeSort(e))}
						>
							{sortOptions.map((product, key) => (
								<option key={key} value={product.value}>
									{product.name}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="Product-box">
					{data
						? data.map((product, key) => (
								<Card
									clicked={() => props.click(product.id)}
									key={key}
									{...product}
								></Card>
						  ))
						: null}
					s
				</div>
				{props.selectedProducts.length ? (
					<div className="App-main-selectedProduct">
						<div>
							<h4>Selected product</h4>
							<div className="App-main-selectedProductBox">
								{props.selectedProducts.map((product, key) => (
									<Card key={key} {...product}></Card>
								))}
							</div>
						</div>
					</div>
				) : null}
			</main>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedProducts: state.selectedProducts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		click: (id) => dispatch({ type: actionTypes.ADD_PRODUCT, id: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
