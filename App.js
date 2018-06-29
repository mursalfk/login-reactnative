import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, TextInput } from 'react-native';
export default class extends Component {
 //Component class extend
 //Methods for React - Native
 // render() -> Draw the view on Mobile Screen
 //Custom Methods (User driven)
 constructor(props) {
 super(props); //Inheriting parent class methods and objects
 this.state = {
   username:'', 
   password:''
   };
 //this.handleButton = this.handleButton.bind(this);
 //this.props = {message: ''}
 }
 onLogin(){
    const {username, password} = this.state;
  if(username=='admin' && password == 'pass'){
    alert('Logged in')
  }
  else{
    alert('logged out')
  }
}

 render() {
 //Draw view on Mobile Screen
 return(
 <View style={Styles.container}> 
  <Text style={Styles.text}>Hello World</Text>
  <TextInput
  value={this.state.username}
    style={{height: 40}}
    placeholder="Enter Your Username"
    onChangeText={(username) => this.setState({username})}
  />
  <TextInput
    value={this.state.password}
    style={{height: 40}}
    placeholder="Enter Your Password"
    onChangeText={(password) => this.setState({password})}
  />
  <Button 
  title="Click Here"
  onPress={this.onLogin.bind(this)}
  />
 </View>
 );
 }
}

const Styles = StyleSheet.create({
 text: {
 fontSize: 40,
 color: 'black'
 },
 container: {
 backgroundColor: 'white',
 height: '100%'
 }
})