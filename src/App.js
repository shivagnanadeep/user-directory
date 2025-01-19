import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						exact
						path="/users/:id"
						component={UserDetails}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
