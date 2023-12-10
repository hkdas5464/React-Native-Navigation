// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Details" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
