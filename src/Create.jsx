import {React, useState} from 'react'
import { addRecipe } from './RecipeReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Create() {

    const [recipe, setRecipe] = useState({
        name: '',
        ingerdients: '',
        instructions: ''
    })
    console.log(recipe)
    const recipes = useSelector(state => state.recipe)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addRecipe({id:recipes[recipes.length-1].id+1, ...recipe}))
        navigate('/')
    }


  return (
    <div className='container mt-5'>
        <div className='card'>
            <div className='card-header'>
                <div className='d-flex justify-content-center fw-bold fs-2 text-uppercase'>
                    Add Recipe
                </div>
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control' onChange={(e) => setRecipe({...recipe, name: e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Ingredients</label>
                        <input type="text" className='form-control' onChange={(e) => setRecipe({...recipe, ingerdients: e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Instructions</label>
                        <input type="text" className='form-control' onChange={(e) => setRecipe({...recipe, instructions: e.target.value})}/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary btn-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Create
