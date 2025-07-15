import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//react Element
const heading = (
  <h1>Hello ...........!</h1>
)

//react functional component

const HandlingFunctionalComponent = () =>(
   <div id = "heading">
    <h1 className='h1Tag'>
      Hello React JS........!
    </h1>
  </div>
)

const Handling1 = () =>{
  return <div id = "heading">
    {HandlingFunctionalComponent()}
    {heading}
    <HandlingFunctionalComponent />
    <h1 className='h1Tag'>
      Hello React JS....
    </h1>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Handling1 />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
