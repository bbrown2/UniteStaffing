import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import GlobalStyle from '../globalStyles';
import Main from './main/Main';
import Footer from './footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<React.Fragment>
				<GlobalStyle />
				<Header />
				<Hero />
				<Main />
				<Footer />
			</React.Fragment>
		</Router>
	);
};

export default App;
