import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './home/App';
import * as serviceWorker from './serviceWorker';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, faCircle, faFileAlt, faTwitter, faLinkedin, faGithub, faMedium)

// DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
