import { z } from "zod";

export const recipeSchema = z.object({
	title: z.string().min(5, "Título obrigatório"),
	description: z.string().max(500, "Máximo 500 caracteres"),
	cookingTimeInMinuts: z.string(),
	image: z.string(),
});

export type RecipeFormData = z.infer<typeof recipeSchema>