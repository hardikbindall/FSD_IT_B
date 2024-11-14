const parent=document.getElementById("root");
const node=React.createElement("p",{},"This is a new paragraph");
const root=ReactDOM.createRoot(parent);
root.render(node);

const node1=React.createElement("h1",{},"Shopping Cart");
root.render([node,node1]);

const item1=React.createElement("li",{},"item1");
const item2=React.createElement("li",{},"item2");
const item3=React.createElement("li",{},"item3");
const item4=React.createElement("li",{},"item4");
const list=React.createElement("ol",{},item1,item2,item3,item4);
root.render([node,node1,list]);
