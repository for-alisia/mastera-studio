/** Dependencies */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/** Components */
import App from './app';

/** Store */
import { store } from './store';

/** Styles */
import './index.styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
