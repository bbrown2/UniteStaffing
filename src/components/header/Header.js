import React, { useState } from 'react';
import { NavContext } from '../contexts/NavContext';
import Sidebar from '../sidebar/Sidebar';
import Navbar from './navbar/Navbar';

const Header = () => {
	const [ showSidebar, setShowSidebar ] = useState(false);

	return (
		<React.Fragment>
			<NavContext.Provider value={{ showSidebar, setShowSidebar }}>
				<Navbar />
				<Sidebar />
			</NavContext.Provider>
		</React.Fragment>
	);
};

export default Header;
