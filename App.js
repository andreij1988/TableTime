import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable, TextInput, ImageBackground } from 'react-native';
import { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import TabScreen from './screens/TabScreen';
import booking from './screens/booking'
import UpdateProfile from './screens/UpdateProfile'
import MyReservationsDetails from './screens/myReservationsDetails';
import MyFavoriteDetails from './screens/myFavoriteDetails';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: false,
          headerTitleAlign: "center"
        }}
   
        initialRouteName="SignIn">
        <Stack.Screen component={SignIn} name="SignIn"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
          <Stack.Screen component={SignUp} name="SignUp"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
        <Stack.Screen component={TabScreen} name="TabScreen"
          options={
            ({ route }) => (
              {
                headerStyle : {backgroundColor : "#E69F00"},
                headerTitle: () => (
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>{route.params.params.name}</Text>
                ),
              })}
              >
              </Stack.Screen>
        <Stack.Screen component={booking} name="Booking"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
          <Stack.Screen component={UpdateProfile} name="Update Profile"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
          <Stack.Screen component={MyReservationsDetails} name="Booking Details"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
          <Stack.Screen component={MyFavoriteDetails} name="Favorite Restuarant"
           options={{
            headerStyle: {
              backgroundColor: '#E69F00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 20,
     borderRadius:10,
     justifyContent: 'center',
 },
  tb: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#efefef",
    color: "#333",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginVertical: 10
},
  btn: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor : "blue",
},
btnLabel: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight:"bold"
}
});
