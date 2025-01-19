import './index.css';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { PiCity } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const UserDetailsCard = (props) => {
	const { user } = props;
	console.log(user);
	const { id, name, email, address } = user;
	const { city } = address;
	return (
		<li className="user-details-card">
			<Link
				to={`users/${id}`}
				className="link"
			>
				<div className="details-container">
					<IoPerson />
					<h1 className="name">{name}</h1>
				</div>
				<div className="user-details-card-inner">
					<div className="details-container">
						<MdOutlineEmail className="icon" />
						<p className="paragraph">{email}</p>
					</div>
					<div className="details-container">
						<PiCity className="icon" />
						<p className="paragraph">{city}</p>
					</div>
				</div>
			</Link>
		</li>
	);
};
export default UserDetailsCard;
