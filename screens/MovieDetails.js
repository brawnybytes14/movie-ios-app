import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const MovieDetails = ({ route, navigation }) => {
    const { movieId, title } = route.params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://freetestapi.com/api/v1/movies/${movieId}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error(error));
    }, [movieId]);

    return (
        <View style={styles.container}>
            {movie ? (
                <>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.plot}>{movie.plot}</Text>
                    <Button
                        title="Book Now"
                        onPress={() => navigation.navigate('Booking', { movieId, title: movie.title })}
                    />
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    plot: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default MovieDetails;
