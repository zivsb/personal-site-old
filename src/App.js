import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";
import Bottom from "./components/bottom/Bottom"
import "./index.css"

function App() {
  return (
    <div className="App">
      <hr />
      <div className="box1"><Intro /></div>
      <hr/>
      <div className="box"><ProductList /></div>
      <hr />
      <div className="box"><Bottom /></div>
    </div>
  );
}

export default App;
