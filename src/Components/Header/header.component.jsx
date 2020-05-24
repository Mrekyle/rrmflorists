import React from 'react';

import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
	<div className='header'>
	<h1>LOGO HERE</h1>
		<div className='options'>
			<Link className='option' to='/'>
				HOME
			</Link>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/florist-choice'>
				FLORISTS CHOICE 
			</Link>
			<Link className='option' to='/funerals'>
				FUNERALS
			</Link>
			<Link className='option' to='/weddings'>
				WEDDINGS
			</Link>
			<Link className='option' to='/delivery'>
				DELIVERY
			</Link>
			<Link className='option' to='/about'>
				ABOUT
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
		</div>
	</div>
);

export default Header;