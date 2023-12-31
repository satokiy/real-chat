import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  left?: JSX.Element;
  children: string;
  right?: JSX.Element;
};

export default function Header({ left, children, right }: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
