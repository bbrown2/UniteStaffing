import styled from 'styled-components';
import { device } from '../../mediaQuery';
export const SidebarContainer = styled.div`
	background-color: #fff;
	height: 100vh;
	width: 260px;
	position: fixed;
	top: 0;
	left: ${({ slide }) => (slide ? 0 : '-1000px')};
	z-index: 2;
	transition: all .3s ease-in-out;
	user-select: none;

	@media ${device.tablet} {
		display: none;
	}
`;

export const Backdrop = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	left: ${({ slide }) => (slide ? 0 : '-1000px')};
	z-index: 1;

	@media ${device.tablet} {
		display: none;
	}
`;

export const IconContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	height: 50px;
	left: 15px;
	/* background-color: red; */
`;

export const SidebarNavList = styled.div`
	display: flex;
	justify-content: left;
	padding-left: 30px;
	margin-top: 50px;

	li {
		line-height: 50px;
		font-size: var(--fontSm);
		font-weight: var(--fontNormal);
		list-style: none;
		cursor: pointer;
	}
`;
