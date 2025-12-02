import type { IRecipes } from "@/@types/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: string[] } = {
  items: []
}

const favoriteRecipes = createSlice({
  name: 'favoriteRecipes',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IRecipes>) => {
      state.items.push(action.payload.id)
    },
    removeFavorite: (state, action: PayloadAction<IRecipes>) => {
      state.items = state.items.filter(recipeId => recipeId !== action.payload.id)
    }
  }
})

export const { addFavorite, removeFavorite } = favoriteRecipes.actions
export default favoriteRecipes.reducer