import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Logo extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Image 
					style={{ width: 40, height: 70 }}
					source="'./beats.png'" 
				/>
				<Text style={styles.logoText}> jhfj </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoText: {
		fontSize: 18,
		color: 'white'
	}
});
