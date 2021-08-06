import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavContext } from '../../contexts/NavContext';
import { NavbarContainer, NavbarContent, CompanyLogo, NavbarList, LogoContainer, IconContainer } from './NabarStyles';
import UniteLogo from '../../../images/unite_staffing_logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	:hover {
		color: #888;
	}
`;

const Navbar = () => {
	const { showSidebar, setShowSidebar } = useContext(NavContext);

	const handleClick = () => setShowSidebar(!showSidebar);

	return (
		<React.Fragment>
			<NavbarContainer>
				<NavbarContent>
					<IconContainer>
						<GiHamburgerMenu
							style={{ height: '20px', width: '20px', cursor: 'pointer' }}
							onClick={handleClick}
						/>
					</IconContainer>
					<LogoContainer>
						<Link style={{ display: 'flex', cursor: 'pointer', zIndex: 0 }} to={'#'}>
							<CompanyLogo src={UniteLogo} />
						</Link>
					</LogoContainer>
					<NavbarList>
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
					</NavbarList>
				</NavbarContent>
			</NavbarContainer>
		</React.Fragment>
	);
};

export default Navbar;
