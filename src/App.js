import logo from './logo.svg';
import './App.css';
import { NewsContextProvider } from './Components/NewsContext';


function App() {
  return (
    <div className="App">
      <NewsContextProvider />
      
    </div>
  );
}

export default App;
