import { AppRegistry } from 'react-native-web';
import App from './App';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent('MyApp', () => App);

const rootTag = document.getElementById('root');
const root = createRoot(rootTag);
root.render(<App />);
