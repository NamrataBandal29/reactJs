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



/*
- Header 
  - logo
  -navitem
    - home
    - menu
    - about us
-body
 -search
 -reasCart

-footer
 - 




*/

const AppLayout = () => {
  return(<div className='appLayOut'>
    <HeaderReas />
    <Body />
  </div>
  )
}

const HeaderReas = () => {
  return (<div className ="headerReas">
    <div className ="header-logo">
      <img className='header-logo-img' alt='no' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey8fdvSx3FakG_12g-8hGXqH9PGdBqtd5g2Cm52MW23TUBjMGgXI9a-ixQU1D-roh3HQ&usqp=CAU' />
    </div>
    <div className ="header-nav-item">
      <ul className='ul'>
        <li>Home</li>
        <li>Contact us</li>
        <li>About us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>)
}

const Body = () =>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='reasContaner'>
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
      </div>
    </div>
    
  )
}

const restCardStyle = ({backgroundColor:'pink'});

const RestCard = () =>{
  return(
    <div className = "rest-card" style={{backgroundColor:'pink'}}>
      <img className='rest-food-img' alt = 'rest-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey8fdvSx3FakG_12g-8hGXqH9PGdBqtd5g2Cm52MW23TUBjMGgXI9a-ixQU1D-roh3HQ&usqp=CAU' />
      <h3>Test Foods</h3>
      <h4>foods</h4>
      <h4>4.5 </h4>
      <h4>30 min </h4>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
