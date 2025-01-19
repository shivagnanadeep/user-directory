import { Component } from 'react';
import './index.css';
import UserDetailsCard from '../UserDetailsCard';
import { FaSearch } from 'react-icons/fa';
const statusConstants = {
	initial: 'INITIAL',
	success: 'SUCCESS',
	failure: 'FAILURE',
	loading: 'LOADING',
};
class Home extends Component {
	state = {
		status: statusConstants.initial,
		users: [],
		searchInput: '',
	};
	componentDidMount = () => {
		this.fetchAllUserDetails();
	};

	fetchAllUserDetails = async () => {
		const URL = 'https://jsonplaceholder.typicode.com/users';
		const options = {
			method: 'GET',
		};
		const response = await fetch(URL, options);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			this.setState({ users: data, status: statusConstants.success });
		} else {
			this.setState({ status: statusConstants.failure });
		}
	};

	updateSearchInput = (e) => {
		this.setState({ searchInput: e.target.value });
	};

	renderSearchField = () => (
		<div className="search-input-container">
			<FaSearch />
			<input
				type="search"
				onChange={this.updateSearchInput}
				className="search-input"
			/>
		</div>
	);

	render() {
		const { users, searchInput } = this.state;
		const updatedUsers = users.filter((each) => {
			return each.name.toLowerCase().includes(searchInput.toLowerCase());
		});
		return (
			<div className="home-container">
				{this.renderSearchField()}
				<div className="users-container">
					<div className="users-title-container">
						<h1 className="users-title">users</h1>
					</div>
					<ul className="users-list">
						{updatedUsers.map((each) => (
							<UserDetailsCard
								key={each.id}
								user={each}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default Home;
