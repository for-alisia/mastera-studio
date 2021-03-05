/** Dependencies */
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

/** Components */
import App from './app';

/** Styles */
import './index.styles.css';
import { mainTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
);
