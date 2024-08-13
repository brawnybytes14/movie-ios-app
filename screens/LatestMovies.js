import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LatestMovies = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://freetestapi.com/api/v1/movies?limit=5')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    }, []);

    const renderMovie = ({ item }) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate('MovieDetails', { movieId: item.id, title: item.title })}>
            <Text style={styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Latest Movies</Text>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    movieItem: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    movieTitle: {
        fontSize: 18,
    },
});

export default LatestMovies;
