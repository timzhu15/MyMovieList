import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    // <Provider store={store}>
        <Router>
            <App />
        </Router>
    // </Provider>
);  