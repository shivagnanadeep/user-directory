import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { Component } from 'react';
// import userContext from './context/userContext';
import './App.css';

class App extends Component {
	// state = { users: [], response: 0 };
	// getAllProducts = async () => {
	// 	const URL = 'https://jsonplaceholder.typicode.com/users';
	// 	const options = {
	// 		method: 'GET',
	// 	};
	// 	const response = await fetch(URL, options);
	// 	if (response.ok) {
	// 		const data = await response.json();
	// 		console.log(data);
	// 		this.setState({ users: data, response: 1 });
	// 	} else {
	// 		this.setState({ response: -1 });
	// 	}
	// };
	// getProduct = (id) => {
	// 	const { users } = this.state;
	// 	let user = null;
	// 	user = users.map((each) => {
	// 		if (each.id !== id) {
	// 		}
	// 		return each;
	// 	});
	// 	return user;
	// };
	render() {
		// const { users, response } = this.state;
		return (
			<BrowserRouter>
				{/* <userContext.Provider
					value={{
						users,
						response,
						getAllProducts: this.getAllProducts,
						getProduct: this.getProduct,
					}}
				> */}
				<Switch>
					<Route
						exact
						path="/"
						component={Home}
					/>
					{/* <Route
						exact
						path="/users/:id"
						component={}
					/> */}
				</Switch>
				{/* </userContext.Provider></userContext.Provider> */}
			</BrowserRouter>
		);
	}
}

export default App;
