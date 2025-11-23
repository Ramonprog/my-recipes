import { useFormContext } from "react-hook-form";
import { RecipeImageField } from "./recipes-image-field";

export function RecipesFormFields() {
	const { register } = useFormContext();

	const fields = [
		{ name: "title", label: "Título", type: "text" },
		{ name: "cookingTimeInMinutes", label: "Tempo de Cozimento", type: "text" },
		{ name: "description", label: "Descrição", type: "textarea" },
	];

	return (
		<div className="flex flex-col gap-6 px-10 py-6">
			{fields.map((f) => {
				return (
					<div className="" key={f.name}>
						<label htmlFor={f.name}>{f.label}</label>
						{f.type === "text" ? (
							<input
								{...register(f.name)}
								type="text"
								id={f.name}
								className="w-full border border-gray-200 rounded-sm py-2 bg-gray-100 outline-none"
							/>
						) : (
							<textarea
								{...register(f.name)}
								name={f.name}
								className="w-full border border-gray-200 rounded-sm bg-gray-100 outline-none"
								rows={6}
								id={f.name}
							/>
						)}
					</div>
				);
			})}

			<RecipeImageField />
			<button
				type="submit"
				className="w-full bg-orange-600 px-4 py-2 rounded-md text-white font-semibold cursor-pointer hover:opacity-80"
			>
				Publicar Receita
			</button>
		</div>
	);
}
