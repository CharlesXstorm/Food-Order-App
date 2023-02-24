
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import { DataContextProvider } from './components/Dependencies/dataContext';


function App() {



  return (
    <DataContextProvider className="App">
      <Landing />
      <Home />
    </DataContextProvider>
  );
}

export default App;
