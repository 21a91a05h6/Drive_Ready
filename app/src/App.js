//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CompA from './components/compA';
import CompB from './components/compB';
import CompC from './components/compC';
import CompD from './components/compD';
import Image from './components/image';
import Person from './components/person';
import Menu from './components/menu';
import List from './components/studentList';
import Lists from './components/list';
import Style from './components/styles';
import Image1 from './components/image1';
import Imageover from './components/imageover';
import Light from './components/light';
import Hooks from './components/hooks';
import Form from './components/form';
import FruitSearch from './components/fruitsearch';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>My app</h1>
      {/* <CompA />
      <CompB/>
      <CompC/>
      <CompD/>
      <Image/>
      <Person name="teju" roll="B3" clg="aec" branch="cse"/> */}
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/compA' element={<CompA/>}/>
            <Route path='/compB' element={<CompB/>}/>
            <Route path='/compC' element={<CompC/>}/>
            <Route path='/compD' element={<CompD/>}/>
            <Route path='/image' element={<Image/>}/>
            <Route path='/person' element={<Person name="teju" roll="B3" clg="aec" branch='cse'/>}/>
            <Route path='/studentList' element={<List/>}/>
            <Route path='/list' element={<Lists/>}/>
            <Route path='/styles' element={<Style/>}/>
            <Route path='/image1' element={<Image1/>}/>
            <Route path='/imageover' element={<Imageover/>}/>
            <Route path='/light' element={<Light/>}/>
            <Route path='/hooks' element={<Hooks/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/fruitsearch' element={<FruitSearch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
