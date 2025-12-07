import { RecipeCard } from "@/components/shared/recipe-card";
import { UseRecipe } from "@/hooks/use-recipe";
import { useFindRecipesQuery } from "@/services/queries/recipes";

export function HomePage() {
  const { recipes } = UseRecipe();
  const { data, isLoading, isError, error } = useFindRecipesQuery();
  console.log("🚀 ~ HomePage ~ data:", data);

  if (isLoading) return <p>Carregando receitas...</p>;
  if (isError) return <p>Erro ao carregar: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 place-items-center">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
}
