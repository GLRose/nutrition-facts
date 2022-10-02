import { useState, useEffect} from 'react';
import '../components/nutrition-form.css'
import axios from 'axios';

const NutritionForm = () => {

    const [query, setQuery] = useState('apple')
    const [food, setFood] = useState('')
    
    const handleChange = e => {    
      setQuery(e.target.value)
      // setFood(e.target.value)
      }

      const handleClick = e =>{
        e.preventDefault()
        // setFood(query)

        const options = {
          method: 'GET',
          url: 'http://localhost:8080/foods',
          params: {
            ingr: query,
          }
        }

          axios.request(options).then((response) => {
            console.log(response.data)
            // setFood(response.data.parsed[0].food.knownAs)
            setFood(response.data.parsed[0].food.nutrients.FAT)
          }).catch((error) => {
            console.error(error)
          })
      }

      // useEffect(() => {
      //   const options = {
      //     method: 'GET',
      //     url: 'http://localhost:8080/foods',
      //     params: {
      //       ingr: query,
      //     }
      //   }

      //     axios.request(options).then((response) => {
      //       console.log(response.data)
      //       setFood(response.data.parsed[0].food.knownAs)
      //     }).catch((error) => {
      //       console.error(error)
      //     })
        
      // }, [food])
  return (
    <div className="wrapper">
    <div className="nutrition-container">
      <form action="/">
        <ul className="nutrition-item-container">
          <li className="nutrition-item nutrition-item-1" >
          <h1>Nutrition Information</h1>
              <label id="nutrition-label" htmlFor="food-query">Search For food . . .</label>
          </li>
          <li className="nutrition-item nutrition-item-2">
              <input type="text" id="food-query" value={query} onChange={handleChange}></input>
          </li>
          <li className="nutrition-item nutrition-item-3">
              <input id="submit-button" type="submit" value="Search" onClick={handleClick}/>
          </li>   
          <li className= "nutrition-item nutrition-item-4">
            {/* <h1>{query}</h1> */}
            <h1>FAT CONTENT: {food} grams</h1>
          </li>
        </ul>
      </form>
  </div>
</div>

  )
}

export default NutritionForm








