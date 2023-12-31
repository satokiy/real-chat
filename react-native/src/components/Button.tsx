import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    margin: 0,
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
