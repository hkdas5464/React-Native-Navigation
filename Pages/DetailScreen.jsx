import React from 'react';
import { View,Text, Button } from 'react-native';

function DetailScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen Screen</Text>
        <Button
        title='Go to Homescreen'
        onPress={()=>{navigation.navigate('Home')}}
        />
        <Button
        title='Go back'
        onPress={()=>{navigation.goBack()}}
        />
      </View>
    );
  }

  export default DetailScreen;