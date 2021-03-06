import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
	<Route
		{...rest}
		component={props =>
			isAuth ? (
				<React.Fragment>
					<Header />
					<Component {...props} />
					<Footer />
				</React.Fragment>
			) : (
				<Redirect to="/" />
			)}
	/>
);

const mapStateToProps = state => ({
	isAuth: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
