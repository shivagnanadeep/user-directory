import { Component } from 'react';
import './index.css';
import UserDetailsCard from '../UserDetailsCard';
import Loader from 'react-loader-spinner';
import { FaSearch } from 'react-icons/fa';
const statusConstants = {
	success: 'SUCCESS',
	failure: 'FAILURE',
	loading: 'LOADING',
};
const SortByOptions = [
	{ id: 'ASC', displayText: 'A-Z' },
	{ id: 'DESC', displayText: 'Z-A' },
];
class Home extends Component {
	state = {
		status: statusConstants.initial,
		users: [],
		searchInput: '',
		activeOptionId: SortByOptions[0].id,
	};
	componentDidMount = () => {
		this.fetchAllUserDetails();
	};

	fetchAllUserDetails = async () => {
		this.setState({ status: statusConstants.loading });
		const URL = 'https://jsonplaceholder.typicode.com/users';
		const options = {
			method: 'GET',
		};
		try {
			const response = await fetch(URL, options);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				this.setState({ users: data, status: statusConstants.success });
			} else {
				this.setState({ status: statusConstants.failure });
			}
		} catch (error) {
			this.setState({ status: statusConstants.failure });
		}
	};

	updateSearchInput = (e) => {
		this.setState({ searchInput: e.target.value });
	};

	updateActiveOptionId = (e) => {
		this.setState({ activeOptionId: e.target.value });
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

	renderLoadingView = () => (
		<div className="views-container">
			<Loader
				type="ThreeDots"
				color="#0b69ff"
				height="50"
				width="50"
			/>
		</div>
	);

	renderSuccessView = () => {
		const { users, searchInput, activeOptionId } = this.state;
		const updatedUsers = users.filter((each) => {
			return each.name.toLowerCase().includes(searchInput.toLowerCase());
		});
		if (activeOptionId === SortByOptions[0].id) {
			updatedUsers.sort((a, b) =>
				a.name.toLowerCase().localeCompare(b.name.toLowerCase())
			);
		} else if (activeOptionId === SortByOptions[1].id) {
			updatedUsers.sort((a, b) =>
				b.name.toLowerCase().localeCompare(a.name.toLowerCase())
			);
		}

		return (
			<ul className="users-list">
				{updatedUsers.map((each) => (
					<UserDetailsCard
						key={each.id}
						user={each}
					/>
				))}
			</ul>
		);
	};

	renderFailureView = () => (
		<div className="views-container">
			<img
				src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
				alt="products failure"
				className="failure-img"
			/>
			<h1 className="failure-heading-text">Oops! Something Went Wrong</h1>
			<p className="failure-description">
				We are having some trouble processing your request. Please try again.
			</p>
		</div>
	);

	render() {
		const { status, activeOptionId } = this.state;
		let content;
		switch (status) {
			case statusConstants.success:
				content = this.renderSuccessView();
				break;
			case statusConstants.loading:
				content = this.renderLoadingView();
				break;
			case statusConstants.failure:
				content = this.renderFailureView();
				break;
			default:
				content = null;
		}
		return (
			<div className="home-container">
				{this.renderSearchField()}
				<div className="users-container">
					<div className="users-title-container">
						<h1 className="users-title">users</h1>
						<select
							value={activeOptionId}
							className="select-filter"
							onChange={this.updateActiveOptionId}
						>
							{SortByOptions.map((each) => {
								return (
									<option
										key={each.id}
										value={each.id}
									>
										{each.displayText}
									</option>
								);
							})}
						</select>
					</div>
					{content}
				</div>
			</div>
		);
	}
}
export default Home;
