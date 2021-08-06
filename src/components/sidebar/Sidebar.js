import React, { useContext } from 'react';
import { SidebarContainer, Backdrop, IconContainer, SidebarNavList } from './SidebarStyles';
import { AiOutlineClose } from 'react-icons/ai';
import { NavContext } from '../contexts/NavContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	:hover {
		color: #888;
	}
`;

const Sidebar = () => {
	const { showSidebar, setShowSidebar } = useContext(NavContext);
	const handleClick = () => setShowSidebar(!showSidebar);

	return (
		<React.Fragment>
			<Backdrop slide={showSidebar} onClick={handleClick} />
			<SidebarContainer slide={showSidebar} onClick={handleClick}>
				<IconContainer>
					<AiOutlineClose style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
				</IconContainer>
				<SidebarNavList>
					<ul>
						<li>
							<NavLink to={'#'}>Home</NavLink>
						</li>
						<li>
							<NavLink to={'#'}>Services</NavLink>
						</li>
						<li>
							<NavLink to={'#'}>Job Search</NavLink>
						</li>
						<li>
							<NavLink to={'#'}>About Us</NavLink>
						</li>
						<li>
							<NavLink to={'#'}>Contact Us</NavLink>
						</li>
					</ul>
				</SidebarNavList>
			</SidebarContainer>
		</React.Fragment>
	);
};

export default Sidebar;
