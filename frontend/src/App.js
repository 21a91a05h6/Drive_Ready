//import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Form from './form';
import UserForm from './userform';
import Menu from './menu';
import Course from './courses/courseform';
import Datalist from './getdata';
import UserData from './getuserdata';
import Editform from './editform';
import CourseData from './courses/getcoursedata';
import Editcourse from './courses/editcourse';
import Edituser from './edituser';
import Auth from './auth';
import Dash from './dashboard';

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
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/form' element={<Form/>}/>
            <Route path='/userform' element={<UserForm/>}/>
            <Route path='/courseform' element={<Course/>}/>
            <Route path='/student' element={<Datalist/>}/>
            <Route path='/user' element={<UserData/>}/>
            <Route path='/editform/:id' element={<Editform/>}/>
            <Route path='/course' element={<CourseData/>}/>
            <Route path='/editcourse/:id' element={<Editcourse/>}/>
            <Route path='/edituser/:id' element={<Edituser/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/dashboard' element={<Dash/>}/>
            {/* <Route path='edituser/:id' element={<Editprofile/>}/> */}
          </Routes>
      </BrowserRouter>
      {/* <Form/> */}
      {/* <UserForm/> */}
    </div>
  );
}

export default App;
