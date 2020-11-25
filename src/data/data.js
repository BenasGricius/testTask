import img1 from "../data/images/1.webp";
import img2 from "../data/images/2.webp";
import img3 from "../data/images/3.webp";
import img4 from "../data/images/4.webp";
import img5 from "../data/images/5.webp";
import img6 from "../data/images/6.webp";
import img7 from "../data/images/7.webp";
import img8 from "../data/images/8.webp";
import img9 from "../data/images/9.webp";

export const APP_TITLE = "Shoes Catalog";

export const PRODUCTS = [
	{
		id: 1,
		brand: "Salomon",
		title: "Speedcross Vario 2 Mens Running Shoes",
		hasDiscount: false,
		price: {
			currency: "€",
			regularPrice: 125.99,
			finalPrice: 125.99,
		},
		image: img1,
	},
	{
		id: 2,
		brand: "Salomon",
		title: "Speedcross 4 Running Shoes Mens",
		hasDiscount: true,
		price: {
			currency: "€",
			regularPrice: 131.99,
			finalPrice: 105.6,
		},
		image: img2,
	},
	{
		id: 3,
		brand: "Nike",
		title: "Mens Air Max IVO Trainers",
		hasDiscount: true,
		price: {
			currency: "€",
			regularPrice: 159.99,
			finalPrice: 99.99,
		},
		image: img3,
	},
	{
		id: 4,
		brand: "Nike",
		title: "Air Max Graviton Men's Shoe",
		hasDiscount: false,
		price: {
			currency: "€",
			regularPrice: 107.99,
			finalPrice: 107.99,
		},
		image: img4,
	},
	{
		id: 5,
		brand: "Puma",
		title: "Roma Basic Mens Trainers",
		hasDiscount: false,
		price: {
			currency: "€",
			regularPrice: 77.99,
			finalPrice: 77.99,
		},
		image: img5,
	},
	{
		id: 6,
		brand: "Puma",
		title: "Zeta Suede Trainers",
		hasDiscount: true,
		price: {
			currency: "€",
			regularPrice: 83.99,
			finalPrice: 42.0,
		},
		image: img6,
	},
	{
		id: 7,
		brand: "Adidas",
		title: "Supernova Boost Running Shoes Mens",
		hasDiscount: true,
		price: {
			currency: "€",
			regularPrice: 101.99,
			finalPrice: 74.4,
		},
		image: img7,
	},
	{
		id: 8,
		brand: "Adidas",
		title: "Game Court Trainers Mens",
		hasDiscount: false,
		price: {
			currency: "€",
			regularPrice: 59.99,
			finalPrice: 59.99,
		},
		image: img8,
	},
	{
		id: 9,
		brand: "Adidas",
		title: "Pace VS Mens Trainers",
		hasDiscount: true,
		price: {
			currency: "€",
			regularPrice: 51.59,
			finalPrice: 43.2,
		},
		image: img9,
	},
];
