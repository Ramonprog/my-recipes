import { RecipeCard } from "@/components/shared/recipe-card";
import { useFavoriteRecipe } from "@/hooks/use-favorite-recipe";

export function FavoriteRecipes() {
  const { listFavoriteRecipes } = useFavoriteRecipe();
  const ListOfFavoriteRecipes = listFavoriteRecipes();
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 place-items-center">
        {ListOfFavoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
