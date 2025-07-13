 /*
<div id="parent">
<div id="child1">
   <h1> this is h1 tag</h1>
   <h2> this is h2 tag</h2>
</div>
<div id="child2">
   <h1> this is h1 tag</h1>
   <h2> this is h2 tag</h2>
</div>
</div>



 */
 
 // create h1 tag in react - use React.createElement

 //{} - attributes of tag
        const heading = React.createElement("h1",{id:"heading", fName:"Namrata"},"Hello World....!");

        // createing root - come from reactDom
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

        const paent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")])]);
        root.render(paent);