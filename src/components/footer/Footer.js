import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import UniteLogo from '../../images/unite_staffing_logo.svg';
import {
	FooterContainer,
	UniteCompanyLogo,
	CompanyInfoContainer,
	IconContainer,
	FooterBar,
	FooterContent
} from './FooterStyles';
import styled from 'styled-components';

const TwitterIcon = styled(FaTwitter)`
	height: 20px;
	width: 20px;
`;
const FacebookIcon = styled(FaFacebookF)`
	height: 20px;
	width: 20px;
`;

const Footer = () => {
	return (
		<React.Fragment>
			<FooterContainer>
				<FooterContent>
					<div>
						<UniteCompanyLogo src={UniteLogo} />
					</div>
					<CompanyInfoContainer>
						<div>
							<p>198 Jule Ave,</p>
							<p>San Diego, VA 22400</p>
							<p>781.911.7984</p>
						</div>
						<IconContainer>
							<a href="/">
								<FacebookIcon />
							</a>
							<a href="/">
								<TwitterIcon />
							</a>
						</IconContainer>
					</CompanyInfoContainer>
				</FooterContent>
			</FooterContainer>
			<FooterBar>
				<p>&copy; 2021 Unite Staffing. All Rights Reserved.</p>
			</FooterBar>
		</React.Fragment>
	);
};

export default Footer;
