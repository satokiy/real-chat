import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import SocketProvider from '../context/SocketContext';

const Index = (): JSX.Element => {
  return (
    <SocketProvider>
      <Redirect href='/demo/test' />
    </SocketProvider>
  );
};

export default Index;
