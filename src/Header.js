import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Zapper
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					Docs
				</Link>
				<div className="right menu">
					<Link to="/" className="item">
						Tutorials
					</Link>
					<div className="right menu">
						<Link to="/" className="item">
							Community
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
