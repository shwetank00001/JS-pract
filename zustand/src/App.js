import Column from "./components/Column";
import './App.css'
  
  function App() {
  return (
    <div className="App">
      <Column state= "PLANNED" />
      <Column state = "UNPLANNED" />
      <Column state= "TO DO"/>
      
    </div>
  );
}

export default App;
