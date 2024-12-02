import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventCard = ({ title, date, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 4,
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventCard;
