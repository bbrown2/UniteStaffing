import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const MainContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	/*  */

	h1 {
		font-size: var(--fontMd);
		font-weight: var(--fontMedium);
		margin: 0 auto;

		@media ${device.mobileS} {
			font-size: 30px;
		}

		@media ${device.tablet} {
			font-size: 48px;
		}
	}
`;

export const InputSection = styled.div`
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	/* background-color: lightblue; */
	max-width: 800px;
	margin: 0 auto;

	@media ${device.tablet} {
		flex-direction: row;
	}

	@media ${device.latop} {
		max-width: 1000px;
	}
	/*  */
`;

export const InputContainer = styled.div`
	width: 270px;
	border: 1px solid #d9d9d9;
	/* background-color: orange; */
	/*  */

	@media ${device.mobileS} {
		width: 300px;
	}

	@media ${device.mobileL} {
		width: 350px;
	}
`;
