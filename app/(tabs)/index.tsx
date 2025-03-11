import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToDoList from 'components/ToDoList';

export default function MainPage() {
  const [tasks, setTasks] = useState<string[]>([
    'Do Laundry',
    'Go to Gym',
    'Walk Dog'
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      
      {/* Pass tasks as a prop */}
      <ToDoList tasks={tasks} />
    </View>
  );
}

// ToDoList component that receives tasks as a prop
{/* Update Code Here */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default MainPage;
