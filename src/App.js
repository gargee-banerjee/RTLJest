import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import test101 from './Helper';

function App() {
  const [data,setData] = useState("");
  const [isEmployee,setIsEmployee] = useState(false);

  const handleClickEvent = ()=>{
    setData("HELLO")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
        <button data-testid = "helloButtn" onClick={handleClickEvent}>CLICK</button>
        <button onClick={test101}>CLICK</button>
        <h1>{data}</h1>
        <label for="i1_">Name</label>
        <input type='text' defaultValue="Name" id="i1_" disabled></input>


        <label for="emp_">Are you an Employee</label>
        <input type="checkbox" id="emp_" onChange={()=>{setIsEmployee(!isEmployee)}}></input>
        {isEmployee && 
        <>
        <label for="i2_">Id</label>
        <input type='text' defaultValue="Id" id="i2_"></input>
        </>
        }

        <div role="roll">Roll</div>

        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </header>
    </div>
  );
}

export default App;
