import React from 'react'
import {Form} from 'react-bootstrap'


const FilterByName = ({inputsearch,setInputsearch}) => {
  return (
    <div> <Form.Control type="text" placeholder="Enter movie title" 
    value={inputsearch}
    onChange ={(e) => setInputsearch(e.target.Value)}
    />
    
    </div>
  )
}

export default FilterByName