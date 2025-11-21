import {createSlice, nanoid, type PayloadAction} from '@reduxjs/toolkit'
import type { IRecipes } from '@/@types/interfaces'
import type { RecipeFormData } from '@/@types/schemas/recipes.schema';

const initialState: {items: IRecipes[]}= {
  items:[]
}

const recipesSlice = createSlice({
  name:"recipes",
  initialState,
  reducers:{
    addRecipe:{
      reducer:(state, action: PayloadAction<IRecipes>) => {
        state.items.push(action.payload);
      },
      prepare: (data: RecipeFormData) =>{
        const id = nanoid();
        return {payload: {...data, id}};
      } 
    },
  }
})

export const {addRecipe} = recipesSlice.actions;
export default recipesSlice.reducer;