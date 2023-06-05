import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
        <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
