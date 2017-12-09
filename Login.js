import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import Logo from './Logo';
import Form from './Form';

export default class Login extends Component {

	/* signup() {
		Actions.signup();
	} */

	render() {
		return (

			<View style={styles.container}>
				<StatusBar
					backgroundColor='blue'
					barStyle="light-content"
				/>
				<Logo />
				<Form type="Login" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}> Don't have an account?</Text>
					<TouchableOpacity>
					<Text style={styles.signupButton}>Signup</Text>
					</TouchableOpacity>
				</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff5252',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	signupTextCont: {
		backgroundColor: '#ff5252',
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	signupText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	},

	signupButton: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500'
	}
 });
