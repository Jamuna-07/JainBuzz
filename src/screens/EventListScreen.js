import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import EventCard from '../components/EventCard';
import EventService from '../services/EventService';

const EventListScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await EventService.getEvents();
      setEvents(data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard title={item.title} date={item.date} image={item.image} />
        )}
      />
    </View>
  );
};

export default EventListScreen;
