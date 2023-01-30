import './App.css';
import Add from './components/Add';
import Sqr from './components/Sqr';
import Students from './components/Students';
import Sub from './components/Sub';
import Multi from './components/Multi';
import UserListing from './components/UserListing';


function App() {
    alert('hi');
    fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then(result => 
      console.table(result.data)
      )
  
 
  return (
     <>
      <UserListing/>
      <button onClick={App}>Click Me</button>
      <Multi/>
      <Add x="5" y="6"/>
      
     </>
  );
}

export default App;