import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';

export default function Index(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/intro.png')} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Text style={styles.title}>Real Chat</Text>
          <Button label='Log In' />
          <Button label='Sign Up' />
          <Link href='demo/'>demo</Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    // fontFamily: 'Comfortaa', // installが必要
    fontSize: 32,
    // fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
