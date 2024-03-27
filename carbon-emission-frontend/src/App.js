import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Data from "./components/Data";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Data/>}/>
        <Route path="/result" element={<Result/>}/>
       </Routes>
       </BrowserRouter> 
      </header>
    </div>
  );
}

export default App;
