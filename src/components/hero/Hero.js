import React from 'react';
import { HeroBackground, HeroTypography } from './HeroStyles';

const Hero = () => {
	return (
		<React.Fragment>
			<HeroBackground>
				<HeroTypography>Land your dream job now.</HeroTypography>
			</HeroBackground>
		</React.Fragment>
	);
};

export default Hero;
