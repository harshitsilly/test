import logo from "./logo.svg";
import DropDown from "./component/dropDown";
import "./App.scss";

const items = ["1min", "5min", "1hr", "3hr"];
function App() {
  return (
    <div className="App">
      <DropDown items={items} selectedIndex="0" />
      <div style={{ background: "red", height: "300px" }}>tets content</div>
    </div>
  );
}

export default App;
