import { Text, View, Pressable } from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/styles';


export default class SignInUp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.h1}>Roommates</Text>
                <Text style={styles.h1}>Plus</Text>
                <Text>Solve all arguments, potential and current</Text>
                <Pressable
                    style={styles.button1}
                    onPress={() => {console.log("pressed signup");}}
                >
                    <Text>Sign Up</Text>
                </Pressable>

                <Pressable 
                    onPress={() => {console.log("pressed login");}}
                >
                    <Text>Log in</Text>
                </Pressable>
            </View>
        );
    }
}
