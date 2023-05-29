import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}
