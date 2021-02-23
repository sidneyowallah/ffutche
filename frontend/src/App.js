import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages';
import About from './pages/about';
import Signup from './pages/signup';
import Gallery from './pages/gallery';
import Dashboard from './pages/dashboard';
import DonorForm from './pages/donor-form';
import UserForm from './pages/user-form';
import SchoolForm from './pages/school-form';
import ScholarshipForm from './pages/scholarship-form';
import MobileMenu from './components/MobileMenu';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<Navbar toggle={toggle} />
			<MobileMenu isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/sign-up" component={Signup} />
				<Route path="/about" component={About} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/donor-form" component={DonorForm} />
				<Route path="/user-form" component={UserForm} />
				<Route path="/school-form" component={SchoolForm} />
				<Route path="/scholarship-form" component={ScholarshipForm} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
