import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "./Data";


const recipeSlice = createSlice({
    name: "recipe",
    initialState: JSON.parse(localStorage.getItem("recipes")) || [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload)
            localStorage.setItem("recipes", JSON.stringify(state))
        },

        editRecipe: (state, action) => {
            console.log(action)
            const { id, name, ingerdients, instructions } = action.payload
            const existingRecipe = state.find(recipe => recipe.id == id)
            if (existingRecipe) {
                existingRecipe.name = name
                existingRecipe.ingerdients = ingerdients
                existingRecipe.instructions = instructions
            }
            localStorage.setItem("recipes", JSON.stringify(state))
        },

        deleteRecipe: (state, action) => {
            const newState = state.filter(recipe => recipe.id != action.payload)
            localStorage.setItem("recipes", JSON.stringify(newState))
            return newState
        }
        
    }
})

export const { addRecipe, editRecipe,deleteRecipe } = recipeSlice.actions
export default recipeSlice.reducer