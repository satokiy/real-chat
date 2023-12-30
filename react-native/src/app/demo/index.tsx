import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';

export default function Index(): JSX.Element {
  const [input, setInput] = useState('');
  const [partnerInput, setPartnerInput] = useState('');
  const onTextInput = (text: string) => {
    setInput(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header>Demo</Header>
      <View style={{ marginBottom: 40 }} />
      <View style={[styles.chatArea, styles.partnerArea]}>
        <TextInput
          numberOfLines={3}
          style={styles.input}
          value={partnerInput}
          onChangeText={(newText) => setPartnerInput(newText)}
        />
      </View>
      <TouchableOpacity style={[styles.chatArea, styles.myArea]}>
        <TextInput numberOfLines={3} value={input} onChangeText={(newText) => onTextInput(newText)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// TODO
/**
 * 入力したらはみ出てしまう。最大3行に
 * 現在入力している文字数と最大文字数を表示する
 * タッチしたらフォーカスを当てられるようにする
 * リフレッシュボタンをつける
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    height: 50,
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
  },
  partnerArea: {
    backgroundColor: 'yellow',
    borderColor: 'yellow',
  },
  myArea: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
});
