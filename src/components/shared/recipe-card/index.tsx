import type { IRecipes } from "@/@types/interfaces";

type RecipeCardProps = {
	recipe: IRecipes;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
	return (
		<div className="bg-white w-72 flex flex-col pb-4 rounded-xl">
			<img
				src={recipe?.image}
				alt={recipe.title}
				className="w-full h-44 object-cover rounded-xl"
			/>
			<div className="w-full px-6 flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					{" "}
					<h2 className="font-semibold text-xl">{recipe.title}</h2>
					<span className="text-gray-600 line-clamp-2">
						{recipe.description}
					</span>
				</div>

				<button
					type="button"
					className="bg-orange-600 text-white font-semibold rounded-md py-2 cursor-pointer hover:opacity-80"
				>
					Mais detalhes
				</button>
			</div>
		</div>
	);
}
