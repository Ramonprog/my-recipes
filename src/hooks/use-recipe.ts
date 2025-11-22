import { useDispatch, useSelector } from "react-redux";
import type { RecipeFormData } from "@/@types/schemas/recipes.schema";
import type { RootState } from "@/store";
import { addRecipe } from "@/store/features";

export function UseRecipe() {
  const dispach = useDispatch()
  const recipes = useSelector((state: RootState) => state.recipes.items)

  function storeRecipe(values: RecipeFormData){
    dispach(addRecipe(values))
  }

  return {storeRecipe, recipes}
}