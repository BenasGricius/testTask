import { PRODUCTS } from "../data/data";
import { actionTypes } from "./actions";

const initialState = {
	selectedProducts: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:
			return {
				...state,
				selectedProducts: state.selectedProducts.concat(
					PRODUCTS[action.id - 1]
				),
			};

		default:
			return state;
	}
};

export default reducer;
