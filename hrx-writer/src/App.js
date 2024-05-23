import React, { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TypeForm from './components/TypeForm';
import Alert from './components/Alert';
import Terms from './components/Terms'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
 


  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert =(message,type)=>{

    setalert ({message : message,
    type : type 
  })
  }

  setTimeout (()=>{

    setalert(null);
  },3000);


  const router = createBrowserRouter([
    {
      path: "/terms",
      element : <Terms/>
    },
  {
    path :"/",
    element : <TypeForm showAlert={showAlert} heading="write want you want " mode={mode} />
   },
   {
   path : "/about",
   element : <About/>
 },

 
   ])

  const togglemode = () => {
    if (mode === 'light') {

      setmode('dark');
      document.body.style.backgroundColor = '#042743';
     showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setmode('light');

      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
    }
  }


  return (
    <>

      <Navbar Title="Home" name="HRX" about="About" terms="T&C" mode={mode} togglemode={togglemode} />
      <Alert alert = {alert}/>

      
      <RouterProvider router={router} />
     
     

       
      
    </>
  );
}

export default App;
