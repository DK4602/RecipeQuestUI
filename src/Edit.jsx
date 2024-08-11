import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editRecipe } from './RecipeReducer'

function Edit() {
    const id = useParams();
    const recipes = useSelector(state => state.recipe)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const exsistingRecipes = recipes.find(recipe => recipe.id == id.id)
    console.log(exsistingRecipes)
    

    const[update , setUpdate] = useState({name:exsistingRecipes.name, ingerdients:exsistingRecipes.ingerdients, instructions:exsistingRecipes.instructions})
    console.log(update)

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editRecipe({id:id.id, ...update}))
        navigate('/')
    }

    return (
        <div className='container mt-5'>
            <div className='card'>
                <div className='card-header'>
                    <div className='d-flex justify-content-center fw-bold fs-2 text-uppercase'>
                        Edit Recipe
                    </div>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleEdit}>
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input type="text" className='form-control' value={update.name} onChange={(e) => setUpdate({...update, name: e.target.value})}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Ingredients</label>
                            <input type="text" className='form-control' value={update.ingerdients} onChange={(e) => setUpdate({...update, ingerdients: e.target.value})} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Instructions</label>
                            <input type="text" className='form-control' value={update.instructions} onChange={(e) => setUpdate({...update, instructions: e.target.value})} />
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

export default Edit
