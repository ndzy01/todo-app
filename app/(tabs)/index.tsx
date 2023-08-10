import { WebView } from 'react-native-webview';

export default function Todo() {
  return <WebView originWhitelist={['*']} source={{ uri: 'https://todo-ndzy01.vercel.app/' }} />;
}
