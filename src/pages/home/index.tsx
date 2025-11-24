import { RecipeCard } from "@/components/shared/recipe-card";
import { UseRecipe } from "@/hooks/use-recipe";

export function HomePage() {
	const { recipes } = UseRecipe();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 place-items-center">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.title} recipe={recipe} />
			))}
		</div>
	);
}
