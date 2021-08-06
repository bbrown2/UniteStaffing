import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const InputFieldContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/*  */
`;
export const InputField = styled.input`
	border: none;
	outline: none;
	height: 35px;
	width: 250px;
	padding-left: 5px;
	/* background-color: red; */
	/*  */

	font-size: var(--fontSm);
	font-weight: var(--fontNormal);

	::placeholder {
		color: #d9d9d9;
		font-weight: var(--fontNormal);
	}

	@media ${device.mobileS} {
		width: 280px;
	}

	@media ${device.mobileL} {
		width: 320px;
	}
`;
