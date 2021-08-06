import React from 'react';
import Input from '../input_field/Input';
import { FiSearch } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { MainContainer, InputContainer, InputSection } from './MainStyles';
import styled from 'styled-components';

const SearchIcon = styled(FiSearch)`
	color: #D9D9D9;
	margin: 0 3px;
	height: 20px;
	width: 20px;
`;
const LocationIcon = styled(MdLocationOn)`
	color: #D9D9D9;
	margin: 0 3px;
	height: 20px;
	width: 20px;

`;

const Main = () => {
	return (
		<React.Fragment>
			<MainContainer>
				<h1>Explore the future</h1>
				<InputSection>
					<InputContainer>
						<Input icon={<SearchIcon />} placeholder="job title" />
					</InputContainer>
					<InputContainer>
						<Input icon={<LocationIcon />} placeholder="location" />
					</InputContainer>
				</InputSection>
			</MainContainer>
		</React.Fragment>
	);
};

export default Main;
