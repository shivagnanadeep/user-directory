import './index.css';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Component } from 'react';
const statusConstants = {
	initial: 'INITIAL',
	success: 'SUCCESS',
	failure: 'FAILURE',
	loading: 'LOADING',
};
class UserDetails extends Component {
	state = { user: {}, status: statusConstants.initial };

	componentDidMount() {
		this.getUser();
	}

	getUser = async () => {
		const { match } = this.props;
		const { params } = match;
		const { id } = params;
		this.setState({ status: statusConstants.loading });
		const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
		const options = {
			method: 'GET',
		};
		try {
			const response = await fetch(URL, options);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				this.setState({ user: data, status: statusConstants.success });
			} else {
				this.setState({ status: statusConstants.failure });
			}
		} catch (error) {
			this.setState({ status: statusConstants.failure });
		}
	};

	renderLoadingView = () => (
		<div className="views-container">
			<Loader
				type="TailSpin"
				color="#0b69ff"
				height="50"
				width="50"
			/>
		</div>
	);

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

	renderSuccessView = () => {
		const { user } = this.state;
		const {
			name,
			username,
			email,
			address: { street, suite, city, zipcode },
			phone,
			website,
			company: { name: companyName, catchPhrase },
		} = user;

		return (
			<div className="card-container">
				<h2 className="card-title">{name}</h2>
				<p>
					<strong>Username:</strong> {username}
				</p>
				<p>
					<strong>Email:</strong> {email}
				</p>
				<p>
					<strong>Address:</strong> {`${street}, ${suite}, ${city}, ${zipcode}`}
				</p>
				<p>
					<strong>Phone:</strong> {phone}
				</p>
				<p>
					<strong>Website:</strong>{' '}
					<a
						href={`http://${website}`}
						target="_blank"
						rel="noreferrer"
					>
						{website}
					</a>
				</p>
				<p>
					<strong>Company:</strong> {`${companyName} - "${catchPhrase}"`}
				</p>
				<Link to="/">
					<button
						className="go-back-button"
						onClick={this.goToHome}
					>
						Go Back
					</button>
				</Link>
			</div>
		);
	};

	render() {
		const { status } = this.state;
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
		return <div className="user-details-container">{content}</div>;
	}
}
export default UserDetails;
