import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Filters from './Components/Filters';
import Data from './Components/Data'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="content">
        <Filters />
        <Data />
      </main>
    </div>
  );
}

export default App;
