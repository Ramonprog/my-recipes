import type { IRecipes } from "@/@types/interfaces";

interface RecipeHeaderProps {
  recipe: IRecipes;
}

export function RecipeDescription({ recipe }: RecipeHeaderProps) {
  return (
    <div className="w-full bg-white shadow-lg p-8 rounded-xl min-h-64">
      <p className="text-gray-600 text-md whitespace-pre">
        {recipe.description}
      </p>
    </div>
  );
}
