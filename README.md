# reactJs

# Parcel

 - Dev Builder
 - Local Server
 - HMR = Hot Module Replacement
 - File Watching Algorithm - written in c++
 - Caching - Faster Builds
 -Image Optimization
 - Minification
 -Bundling
 - compress
-


npx parcel index.html - host app
npx - executing a package got it npm
- npm install react
- npm i react-dom

import React From "react";
import ReactDOM From "react-dom"

npx parcel build index.html


//react Element
 const heading = <h1 className= "h1tag" >Hello React ...!</h1>

or

 const heading = (
<h1 className= "h1tag" >
Hello React ...!
</h1>
);

//ReactDom

const root = createRoot(document.getElementById("root");
root.render(heading)

// react component
2 type 
1) class component
2) functional component

// Functional component
syntax-
const HeadingComponent = () ==> (
    <h1 className = "h1tag">Hello</h1>
);

Note

1)react element pass the render method is 
root.render(heading)

2)component pass the render method 
 root.render(<HeadingComponent />)

// component composition - component inside a components
- composing two components into one another

const Title = () ==> (
    <h1 className = "h1tag">Hello</h1>
);
const HeadingComponent = () ==> (
<Title />
    <h1 className = "h1tag">Hello</h1>
);
 

\\ use retrun use {} 
const Handling1 = () =>{
  return <div id = "heading">
    <h1 className='h1Tag'>
      Hello React JS....
    </h1>
  </div>
}