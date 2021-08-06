import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { device } from '../../../mediaQuery';

export const NavbarContainer = styled.div`
	height: 50px;
	box-shadow: 0px 0px 5px 0px lightgrey;
	user-select: none;
`;

export const NavbarContent = styled(Container)`
	background-color: #fff;
	height: inherit;
	position: fixed;
	top: 0;
	width: 100%;

	@media ${device.tablet} {
		position: relative;
		display: flex;
		/* background-color: red; */
	}
`;

export const NavbarList = styled.div`
	display: none;

	@media ${device.tablet} {
		display: flex;
		/* background-color: Moccasin; */
		width: 500px;
		ul {
			/* background-color: orange; */
			width: inherit;
			list-style: none;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			font-weight: var(--fontNormal);
		}
		li {
			cursor: pointer;
		}
	}
`;

export const LogoContainer = styled.div`
	width: 100%;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.tablet} {
		justify-content: flex-start;
		padding-left: 50px;
	}
`;

export const CompanyLogo = styled.img`
	width: 40px;
	height: 40px;

	@media ${device.tablet} {
		width: 60px;
		height: 60px;
	}
`;

export const IconContainer = styled.div`
	position: fixed;
	width: 100%;
	height: inherit;
	display: flex;
	align-items: center;
	left: 15px;

	@media ${device.tablet} {
		display: none;
	}
`;
