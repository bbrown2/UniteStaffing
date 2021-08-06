import styled from 'styled-components';
import { device } from '../../mediaQuery';
import { Container } from '../../globalStyles';

export const UniteCompanyLogo = styled.img`
	height: 120px;
	width: 120px;
`;

export const FooterContainer = styled.div`
	background-color: #f6f6f6;
	/*  */
`;

export const FooterContent = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 350px;
	font-size: var(--fontSm);
	font-weight: var(--fontNormal);

	@media ${device.tablet} {
		flex-direction: row;
	}
	/*  */
`;

export const CompanyInfoContainer = styled.div`
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 260px;
	/*  */
`;

export const IconContainer = styled.div`
	width: 100px;
	height: auto;
	display: flex;
	justify-content: space-evenly;

	a {
		color: black;
		:hover {
			color: #888;
		}
	}
	/*  */
`;

export const FooterBar = styled(Container)`
	font-size: var(--fontSm);
	font-weight: var(--fontNormal);
	/*  */
`;
