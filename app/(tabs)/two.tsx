import { WebView } from 'react-native-webview';

export default function Todo() {
  return <WebView originWhitelist={['*']} source={{ uri: 'https://www.ndzy01.com' }} />;
}
