import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Booking = ({ route }) => {
    const { movieId, title } = route.params;
    const [name, setName] = useState('');
    const [tickets, setTickets] = useState('');

    const handleBooking = () => {
        if (!name.trim() || !tickets.trim()) {
            Alert.alert('Invalid input!', 'Please fill in the required fields.');
            return;
        }
        Alert.alert('Booking Confirmed', `Name: ${name}, Tickets: ${tickets}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book: {title}</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name (required)"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Number of Tickets (required)"
                value={tickets}
                onChangeText={setTickets}
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleBooking} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Booking;
