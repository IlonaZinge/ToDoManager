import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  todoText: {
    marginBottom: 10, 
  },
  input: {
    marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: '100%',
  },
  todoContainer: {
    marginBottom: 10, 
    padding: 8,
    width: '100%',
  },
  todos: {
    backgroundColor: '#f9f0f0',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todosLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  deleteTodos: {
    width: 24,
    height: 24,
    backgroundColor: '#EA6C80',
    marginRight: 10,
  }
});
