import logo from './logo.svg';
import './App.css';
import TaxCalculator from './components/TaxCalulator';

function App() {
  return (
    <div className="App">
      <div className="taxModal">
        <h1>Income Tax Calculator</h1>
        <TaxCalculator/>
      </div>
    </div>
  );
}

export default App;
