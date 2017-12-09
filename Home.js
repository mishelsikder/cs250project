import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Home extends Component {

    onPress() {
        Alert.alert('on Press!');
    }

    render() {
        return (
            <View style={styles.logoHolder}>
                <Text style={styles.logoHolder}> Relief </Text>
                <View style={styles.buttons}>
                    <Button 
                        onPress={this.onPress}
                        title="Log In"
                    />
                </View>
            </View>
          
        );
    }
}


const styles = StyleSheet.create({
    
    logoHolder: {
        backgroundColor: '#16a085',
        flex: 0.20
      
    },

    buttons: {
        color: '#e74c3c',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: '#000000',
        paddingRight: 40,
        shadowOffset: {
            width: 0,
            height: 3
        },

        shadowRadius: 10,
        shadowOpacity: 0.25 

    }

});
