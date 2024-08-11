import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "./Data";


const recipeSlice = createSlice({
    name: "recipe",
    initialState: recipes,
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload)
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
        },

        deleteRecipe: (state, action) => {
            return state.filter(recipe => recipe.id != action.payload)
        }
    }
})

export const { addRecipe, editRecipe,deleteRecipe } = recipeSlice.actions
export default recipeSlice.reducer