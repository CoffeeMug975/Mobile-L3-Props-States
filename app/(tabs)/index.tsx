import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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

// Fix TypeScript error by explicitly defining the type
function ToDoList({ tasks }: { tasks: string[] }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text style={styles.item}>⬜ {item}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
