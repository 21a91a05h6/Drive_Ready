// import logo from './logo.svg';
import './App.css';//external css
import Home from './home';
import About from './about';//used 'default' while exporting
import { trainee,a } from './person';//this is a variable export
import Services from './services';
import Contact from './contact';
import Menu from './menu';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Student from './student';
import Trainees from './trainees';
import Count from './count';
import Nav from './navbar';
import Click from './click';
import Hooks from './hooks';
import Array from './array';
import Form from './form';
import Form1 from './form1';
import Testeffect from './testeffects';
import Product1 from './product1';
import Product2 from './product2';
import Category from './categories';
import Singleproduct from './singleproduct';
import Dropdown from './dropdown';

function App() {
  console.log(trainee);
  console.log(a);
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
      <h1>This is my app</h1>
      {/* <Home/>
      <About num={a}/>
      <Services/>
      <Contact/> */}
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About name="xyz"/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path='/student' element={<Student name="Theju"/>}/> */}
        <Route path='/trainees' element={<Trainees/>}/>
        <Route path='/count' element={<Count/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/array' element={<Array/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form1' element={<Form1/>}/>
        <Route path='/testeffects' element={<Testeffect/>}/>
        <Route path='/product1' element={<Product1/>}/>
        <Route path='/product2' element={<Product2/>}/>
        <Route path='categories' element={<Category/>}/>
        <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
        <Route path='/dropdown' element={<Dropdown/>}/>
        </Routes>
      </BrowserRouter>
      <Nav/>
      <Click/>
    </div>
  );
}

export default App;
