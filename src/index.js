import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.scss';

const rootDOMElement = document.getElementById('app');
const root = createRoot(rootDOMElement);
root.render(<App />);