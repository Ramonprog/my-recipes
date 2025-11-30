import { useParams } from "react-router";
import { UseRecipe } from "@/hooks/use-recipe";
import { RecipeHeader } from "./components/recipe-header";

export function Recipe() {
  const { findRecipe } = UseRecipe();
  const { id } = useParams();

  const recipe = findRecipe(id);

  if (!recipe) return <h1>Receita não encontrada</h1>;

  return (
    <div className="container m-auto py-6">
      <RecipeHeader recipe={recipe} />
    </div>
  );
}
