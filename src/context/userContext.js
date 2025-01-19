import React from 'react';

const userContext = React.createContext({
	users: [],
	response: 0,
	getProduct: () => {},
	getAllProducts: () => {},
});
export default userContext;
