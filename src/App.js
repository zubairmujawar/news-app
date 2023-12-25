import { useState } from 'react';
import './App.css';
import { AllCards } from './Components/AllCards';
import { Navbar } from './Components/Navbar';

function App() {
  const [category,setcategory] = useState("general")
  return (
    <div className='main-div '>
      <Navbar setcategory={setcategory} />
      <AllCards category={category}/>
    </div>
  );
}

export default App;
