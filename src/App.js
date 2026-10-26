import './App.css';

// Object of blocks
function BlocksObject(value, color){
  this.value = value;
  this.color = color;
}

// Array of objects for the colors
const MyColors = [
  new BlocksObject(1, "#f1ff77"),
  new BlocksObject(2, "#ffb15e"),
  new BlocksObject(3, "#ff5c25"),
  new BlocksObject(4, "#6ab0ff"),
  new BlocksObject(5, "#6affe4"),
  new BlocksObject(6, "#6a6fff"),
  new BlocksObject(7, "#d76aff"),
  new BlocksObject(8, "#ff6acb"),
  new BlocksObject(9, "#f50f0f")
];

// Component to represent one block
function Block({bgcolor, children}) {
  // Function to display value when clicked
  const buttonClick = () => {
    alert(children);
  };
  return (
    <div className="grid-block" style={{backgroundColor: bgcolor}}
      onClick={buttonClick}
    >
      {children}
    </div>
  );
}

// Creates the grid of blocks
function ColorGrid({colorArray}) {
  return (
    <div className="grid-container">
      {colorArray.map((item, index) => (
        <Block key={index} bgcolor={item.color}>{item.value}</Block>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="title"> My Blocks </h1>
    <ColorGrid colorArray={MyColors} />
    </div>
  );
}

export default App;
