import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSockets } from '../../context/SocketContext';

export default function Test(): JSX.Element {

  const [IAM, setIAM] = useState({token: ''})
  const { socket } = useSockets();
  
  
  useEffect(() => {
    // トークンを発行されたら
    const handleToken = (data: { token: string }) => {
      setIAM({token: data.token})
    };
  
    socket.on('token', handleToken);
  
    // コンポーネントのアンマウント時にリスナーをクリーンアップ
    return () => {
      socket.off('token', handleToken);
    };
  }, []); // 空の依存配列を指定して、このエフェクトを一度だけ実行する
  
  const [myInput, setMyInput] = useState('');
  const [yourInput, setYourInput] = useState('');

  // 自分の入力を伝播する
  const myInputEmit = (text: string) => {
    setMyInput(text);
    socket.emit('my-post', {token: IAM.token, message: text})
  }

  const handleYourPostRef = useRef<(msg: {token: string, message: string}) => void>(() => {});

  useEffect(() => {
    handleYourPostRef.current = (msg: {token: string, message: string}) => {
      console.log("msg:", msg.token, "IAM:", IAM.token)
      if (msg.token !== IAM.token) {
        setYourInput(msg.message)
      }
    };

    socket.on('your-post', handleYourPostRef.current);

    // コンポーネントのアンマウント時にリスナーをクリーンアップ
    return () => {
      socket.off('your-post', handleYourPostRef.current);
    };
  }, [IAM]); // IAMを依存配列に追加

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 40}} />
      <View style={styles.chatArea}>
        <Text>{yourInput}</Text>
      </View>
      <TouchableOpacity style={styles.chatArea}>
        <TextInput
          numberOfLines={3}
          value={myInput}
          onChangeText={(newText) => myInputEmit(newText)}
        />
      </TouchableOpacity>
      <Text>{IAM.token}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  chatArea: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    border: 'solid',
    borderWidth: 2,
    borderRadius: 40,
  }
});
