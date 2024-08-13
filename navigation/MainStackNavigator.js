import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LatestMovies from '../screens/LatestMovies';
import MovieDetails from '../screens/MovieDetails';
import Booking from '../screens/Booking';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LatestMovies">
            <Stack.Screen
                name="LatestMovies"
                component={LatestMovies}
                options={{ title: 'Latest Movies' }}
            />
            <Stack.Screen name="MovieDetails" options={{ title: 'Movie Details' }} component={MovieDetails} />
            <Stack.Screen name="Booking" options={{ title: 'Booking' }} component={Booking} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
