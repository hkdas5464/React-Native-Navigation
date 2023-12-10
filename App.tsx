// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, Provider as PaperProvider, Appbar, Text } from 'react-native-paper';
import HomeScreen from './Pages/HomeScreen';
import History from './screens/Subjects/History';
import { Image, View } from 'react-native';
import DetailsScreen from './Pages/DetailsScreen';
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MATHS from './screens/Subjects/Maths';
const Drawer = createDrawerNavigator();


const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }} >
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#2596be',
            marginBottom: 20,
          }}
        >
          <View >
            <Text>SUBJECTS</Text>
          </View>
          {/* <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          /> */}
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
     
    </View>
  );
};




const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
      <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            
            drawerStyle:{backgroundColor:"#c3e7f3"},
            headerStyle:{backgroundColor:"#2596be"}
          }}
          drawerContent={props => <CustomDrawer {...props} />}
          >
          <Drawer.Screen  options={{ drawerLabelStyle:{
            color:"red"
          }}} name="HISTORY" component={History}  />
          <Drawer.Screen name="MATHS" component={MATHS} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};


export default App;
