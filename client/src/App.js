import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [food, setFood] = useState(null)


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8080/foods',
    }
    axios.request(options).then((response) => {
      console.log(response.data)
      setFood(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }, [])

  console.log(food);

  return (
    <div>Welcome to the home page</div>
  )

}

export default App;

