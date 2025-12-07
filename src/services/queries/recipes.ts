import { useQuery } from "@tanstack/react-query"
import { findRecipes } from "../repository/recipes.repository"

export const useFindRecipesQuery = () => {
  return useQuery({
    queryKey: ['public_recipes'],
    queryFn: () => findRecipes(),
    retry: 3,
    staleTime: 1000 * 60 // considera os dados obsoletos em 1min e faz a requisição novamente
  })
}