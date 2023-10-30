import { View, Text, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { auth } from "../controllers/firebaseConfig";
import { signOut } from 'firebase/auth';

import { Ionicons } from '@expo/vector-icons';
import Booking from "./booking";
import MyReservations from "./myReservations";
import RestaurantsListScreen from "./RestaurantsListScreen";

const Tab = createBottomTabNavigator();

const TabScreen = ({ route, navigation }) => {

    const logOut = async () => {
        try {
            // 1. check if a user is currently logged in
            if (auth.currentUser === null) {
                alert("Sorry, no user is logged in.")
            }
            else {
                await signOut(auth)
                alert("Logout Complete!")
                navigation.navigate('SignIn')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => (
                    {
                        headerStyle : {backgroundColor : "green"},
                        headerRight: () => (
                            <Button title='Sign Out' onPress={logOut} color={"red"}/>
                        ),
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            // Define the icon based on the route name
                            if (route.name === 'My Reservations') {
                                iconName = focused ? 'list-sharp' : 'list-outline';
                            }
                            else if (route.name === 'Restuarant Locations') {
                                iconName = focused ? 'map' : 'map-outline';
                            }

                            // Returning the icon component
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: "green",
                        tabBarInactiveTintColor: "red",
                    })}>
             <Tab.Screen
                name="Restuarant Locations"
                component={RestaurantsListScreen}
            />
            <Tab.Screen
                name="My Reservations"
                component={MyReservations}
            />
        </Tab.Navigator>
    )
}

export default TabScreen;