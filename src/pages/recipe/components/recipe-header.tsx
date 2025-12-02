import type { IRecipes } from "@/@types/interfaces";
import { useFavoriteRecipe } from "@/hooks/use-favorite-recipe";
import { FavoriteRecipes } from "@/pages/favorite-recipes";
import { toast } from "sonner";

interface RecipeHeaderProps {
  recipe: IRecipes;
}
export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const { AddfavoriteRecipe, removeFavoriteRecipe } = useFavoriteRecipe();

  function onFavorite() {
    AddfavoriteRecipe(recipe);
    toast.success("Receita adicionada aos favoritos");
  }

  const isRecipeFavorite = FavoriteRecipes(
    (recipeId) => (recipeId == recipeId) == recipe.id
  );

  return (
    <div className="w-full bg-white shadow-lg flex items-center space-x-4 p-4 rounded-xl">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-lg w-45 h-40 object-cover"
      />

      <div className="flex flex-col grow">
        <h1 className="font-semibold text-xl">{recipe.title}</h1>
        <h1 className="font-light text-gray-500">
          {recipe.cookingTimeInMinuts} minutos
        </h1>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="bg-gray-200 w-32 text-gray-500 font-light text-sm rounded-xl cursor-pointer hover:opacity-80 py-2"
        >
          Compartilhar
        </button>
        <button
          type="button"
          className="bg-orange-600 w-32 text-white font-semibold text-sm rounded-xl cursor-pointer hover:opacity-80 py-2"
          onClick={onFavorite}
        >
          Favoritar
        </button>
      </div>
    </div>
  );
}
