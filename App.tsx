import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 16 , backgroundColor:"white" }}>
        <Text style={{ color: 'black' }}>Classes</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};


function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#3498db', // Set the background color of the drawer
        },
        drawerLabelStyle: {
          color: 'white', // Set the text color of the drawer labels
        },
      }} >
      
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Detail' component={DetailScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
