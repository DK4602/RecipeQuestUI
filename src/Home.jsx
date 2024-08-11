import { Button } from 'bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteRecipe } from './RecipeReducer'

function Home() {
    const recipes = useSelector(state => state.recipe)
    console.log(recipes)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteRecipe(id))
    }



  return (
    <div className='container mt-5'>
      <div className='title text-center' style={{ fontSize: '50px' }}>RecipeQuest</div>
      <div className='d flex justify-content-start my-3'>
        <Link to={'/create'} className='btn btn-primary'>Add Recipe</Link>
      </div>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                recipes.map((recipe) => {
                    return (
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.ingerdients}</td>
                            <td>{recipe.instructions}</td>
                            <td><button className='btn btn-danger me-3' onClick={() => handleDelete(recipe.id)}>Delete</button> <Link to={`/edit/${recipe.id}`} className='btn btn-warning'>Edit</Link></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
 
export default Home
