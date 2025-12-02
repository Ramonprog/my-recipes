
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/store"
import type { IRecipes } from "@/@types/interfaces"
import { addFavorite, removeFavorite } from "@/store/features"
import { UseRecipe } from "./use-recipe"

export function useFavoriteRecipe() {
  const { recipes } = UseRecipe()
  const dispach = useDispatch()
  const favoriteRecipes = useSelector((state: RootState) => state.favorite.items)

  function AddfavoriteRecipe(recipe: IRecipes) {
    dispach(addFavorite(recipe))
  }

  function listFavoriteRecipes() {
    return recipes.filter((r) => favoriteRecipes.includes(r.id))
  }

  function removeFavoriteRecipe(recipe: IRecipes) {
    dispach(removeFavorite(recipe))
  }

  return { AddfavoriteRecipe, favoriteRecipes, listFavoriteRecipes, removeFavoriteRecipe }
}