import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ccomponent from './Components';
import Demo from './Function';
import Parent from './Parent';
import reportWebVitals from './reportWebVitals';
import Conditionalrendering from './Conditionalrendering';
import MediaCard from './Uicard';
import ResponsiveAppBar from './Responsive';
import FetchAPI from './Fetch';
import RegisterForm from './Form';
import App from './Dropdown';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  

<RegisterForm/>

   
  </React.StrictMode>
);
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
<App />,
document.getElementById('root')
);*/

reportWebVitals();
