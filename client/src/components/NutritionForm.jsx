import { useState} from 'react';
import '../components/nutrition-form.css'

const NutritionForm = ({food}) => {
    const [query, setQuery] = useState("")
    const handleChange = e => {    setQuery(e.target.value)  }
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
              <input id="submit-button" type="submit" value="Search" />
          </li>   
          <li className= "nutrition-item nutrition-item-4">
            <h1>{query}</h1>
            {/* <h1>{food}</h1> */}
          </li>
        </ul>
      </form>
  </div>
</div>

  )
}

export default NutritionForm