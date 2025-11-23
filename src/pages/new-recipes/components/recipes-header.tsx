import { useFormContext } from "react-hook-form";

export function RecipesHeader() {
	const { getValues, watch } = useFormContext();
	const values = getValues();
	const title = watch("title");
	const description = watch("description");
	const image = watch("image");
	return (
		<div className="max-w-1/2 mx-auto h-auto mt-6 gap-4">
			{image && (
				<img
					src={image}
					alt="'Imagem da Receita"
					className="w-full h-64 object-cover object-center rounded-md"
				/>
			)}

			<h2 className="font-semibold text-2xl mt-4">{title}</h2>
			<span className="text-sm text-gray-400">{description}</span>
		</div>
	);
}
