import {
	recipeSchema,
	type RecipeFormData,
} from "@/@types/schemas/recipes.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { RecipesFormFields } from "./components/recipes-form-fields";

export function NewRecipesPage() {
	const methods = useForm<RecipeFormData>({
		resolver: zodResolver(recipeSchema),
		defaultValues: {
			title: "",
			description: "",
			cookingTimeInMinuts: "",
			image: "",
		},
	});

	const { handleSubmit } = methods;

	const onsubmit = (values: RecipeFormData) => {
		debugger;
	};
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onsubmit)}
				className="bg-white max-w-1/2 mx-auto h-auto rounded-md shadow-sm mt-6"
			>
				<RecipesFormFields />
			</form>
		</FormProvider>
	);
}
