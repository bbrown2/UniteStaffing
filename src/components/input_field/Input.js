import React from 'react';
import { InputField, InputFieldContainer } from './InputStyles';

const Input = ({ icon, placeholder }) => {
	return (
		<React.Fragment>
			<InputFieldContainer>
				<InputField type="text" placeholder={placeholder} />
				{icon}
			</InputFieldContainer>
		</React.Fragment>
	);
};

export default Input;
