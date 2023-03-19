import logo from './logo.svg';
import './App.css';
import tenHighestPopulation from './data/data.json';
import Country from './components/Country/Country';

function App() {
  const worldPopulation = 7693165599;

  return (
    <div className="App">
        <Country country={"Morocco"} population={1166564} percentage={100}/>
    </div>
  );
}

export default App;
