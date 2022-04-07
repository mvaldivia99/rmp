import { Text, View, Pressable, TextInput} from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/styles';

export default class SignUp extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={styles.container}>
               <Text>Give us some info to work with</Text>
               <TextInput
                    placeholder="Enter a username"
               />
               <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
               />
               <TextInput
                    placeholder="Enter your email address"
               />
               <Pressable><Text>Make my account</Text></Pressable>
               
            </View>
        );
    }
}
