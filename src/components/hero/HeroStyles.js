import styled from 'styled-components';
import hero_img from '../../images/unite_staffing_hero.jpg';
import { device } from '../../mediaQuery';

export const HeroBackground = styled.div`
	height: 400px;
	width: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero_img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin: 100px 0;
	user-select: none;

	@media ${device.tablet} {
		height: 600px;
	}

	@media ${device.laptopL} {
		background-position: top 20% center;
		/* height: 900px; */
	}
`;

export const HeroTypography = styled.h1`
	font-size: var(--fontLg);
	font-weight: var(--fontNormal);
	color: #fff;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	letter-spacing: 2px;

	@media ${device.tablet} {
		font-size: var(--fontXl);
	}

	@media (min-width: 1200px) {
		font-size: var(--fontXXl);
	}

	@media ${device.laptopL} {
		font-size: var(--fontHuge);
	}
`;
