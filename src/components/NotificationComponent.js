import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationComponent = ({ message }) => {
  return (
    <View style={styles.notification}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#eaf4fc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b8dff8',
  },
});

export default NotificationComponent;
