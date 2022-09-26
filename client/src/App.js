import axios from 'axios'
import './App.css'
import NutritionForm from './components/NutritionForm';
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
      console.log(response.data.parsed.length)
      if (response.data.parsed.length === 0) {
        setFood(null);
      } else {
        setFood(response.data.text);
      }
    }).catch((error) => {
      console.error(error)
    })
  }, [])

  console.log(food);

  return (

    <div>
      <NutritionForm food={food} />
      {/* <p>{food}</p> */}
    </div>

  )

}

export default App;

